const TOKEN_MAP = new Map<string | number, string | number>();

const CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const EXTENDED_CHARS = 'àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž';
const ALL_CHARS = CHARS + EXTENDED_CHARS + '\n\t\r';

const initializeTokenizerMap = () => {
  if (TOKEN_MAP.size > 0) return;

  let tokenId = 1;
  for (let i = 0; i < ALL_CHARS.length; i++) {
    const char = ALL_CHARS[i];
    if (!TOKEN_MAP.has(char)) {
      TOKEN_MAP.set(char, tokenId);
      TOKEN_MAP.set(tokenId, char);
      tokenId++;
    }
  }

  TOKEN_MAP.set('<UNK>', 0);
  TOKEN_MAP.set(0, '<UNK>');
};

export const tokenizeText = (text: string): number[] => {
  initializeTokenizerMap();
  
  if (!text) return [];
  
  const tokens: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const token = TOKEN_MAP.get(char) as number;
    tokens.push(token !== undefined ? token : 0);
  }
  
  return tokens;
};

export const detokenizeTokens = (tokens: number[]): string => {
  initializeTokenizerMap();
  
  if (!tokens || tokens.length === 0) return '';
  
  let result = '';
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const char = TOKEN_MAP.get(token) as string;
    result += char !== undefined ? char : '<UNK>';
  }
  
  return result;
};

export const parseTokenInput = (input: string): number[] => {
  if (!input.trim()) return [];
  
  const cleaned = input.replace(/[\[\]]/g, '').trim();
  if (!cleaned) return [];
  
  const tokens = cleaned.split(',').map(token => {
    const num = parseInt(token.trim(), 10);
    if (isNaN(num) || num < 0) {
      throw new Error('Invalid token format. Use array format like: [1, 2, 3]');
    }
    return num;
  });
  
  return tokens;
};

export const getVocabularySize = (): number => {
  initializeTokenizerMap();
  return TOKEN_MAP.size / 2;
};

export const isValidToken = (token: number): boolean => {
  initializeTokenizerMap();
  return TOKEN_MAP.has(token);
};

export const getCharacterMapping = () => {
  initializeTokenizerMap();
  
  const mapping: { char: string; token: number; display: string }[] = [];
  
  let tokenId = 1;
  for (let i = 0; i < ALL_CHARS.length; i++) {
    const char = ALL_CHARS[i];
    if (!mapping.find(m => m.char === char)) {
      let display = char;
      if (char === '\n') display = '\\n';
      if (char === '\t') display = '\\t';
      if (char === '\r') display = '\\r';
      if (char === ' ') display = 'SPACE';
      
      mapping.push({ char, token: tokenId, display });
      tokenId++;
    }
  }
  
  mapping.unshift({ char: '<UNK>', token: 0, display: '<UNK>' });
  
  return mapping;
};