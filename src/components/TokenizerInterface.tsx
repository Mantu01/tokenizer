'use client';

import React, { useState } from 'react';
import { tokenizeText, detokenizeTokens, parseTokenInput, getVocabularySize } from '../utils/tokenizer';
import { COLORS, SIZES, SPACING } from '../utils/constants';
import Header from './Header';
import ModeToggle from './ModeToggle';
import InputSection from './InputSection';
import OutputSection from './OutputSection';
import StatsSection from './StatsSection';
import ViewMappingButton from './ViewMappingButton';
import CharacterMappingModal from './CharacterMappingModal';

interface TokenizerState {
  mode: 'text-to-token' | 'token-to-text';
  inputText: string;
  inputTokens: string;
  outputText: string;
  outputTokens: number[];
  isProcessing: boolean;
  error: string | null;
}

export default function TokenizerInterface() {
  const [state, setState] = useState<TokenizerState>({
    mode: 'text-to-token',
    inputText: '',
    inputTokens: '',
    outputText: '',
    outputTokens: [],
    isProcessing: false,
    error: null,
  });

  const [showMapping, setShowMapping] = useState(false);

  const handleModeSwitch = () => {
    setState(prev => ({
      ...prev,
      mode: prev.mode === 'text-to-token' ? 'token-to-text' : 'text-to-token',
      inputText: '',
      inputTokens: '',
      outputText: '',
      outputTokens: [],
      error: null,
    }));
  };

  const handleProcess = async () => {
    setState(prev => ({ ...prev, isProcessing: true, error: null }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300));

      if (state.mode === 'text-to-token') {
        if (!state.inputText.trim()) {
          throw new Error('Please enter some text to tokenize');
        }
        const tokens = tokenizeText(state.inputText);
        setState(prev => ({
          ...prev,
          outputTokens: tokens,
          outputText: '',
          isProcessing: false,
        }));
      } else {
        if (!state.inputTokens.trim()) {
          throw new Error('Please enter tokens to convert');
        }
        const tokens = parseTokenInput(state.inputTokens);
        const text = detokenizeTokens(tokens);
        setState(prev => ({
          ...prev,
          outputText: text,
          outputTokens: [],
          isProcessing: false,
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
        isProcessing: false,
      }));
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const downloadResult = () => {
    const content = state.mode === 'text-to-token' 
      ? `[${state.outputTokens.join(', ')}]`
      : state.outputText;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tokenizer-result.${state.mode === 'text-to-token' ? 'json' : 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const vocabularySize = getVocabularySize();

  return (
    <div className={`min-h-screen ${COLORS.background.main}`}>
      <div className={`absolute inset-0 ${COLORS.background.overlay}`}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className={SIZES.container}>
          <Header />

          <div className={`${COLORS.background.card} ${SIZES.card} ${SPACING.card}`}>
            <ModeToggle mode={state.mode} onModeSwitch={handleModeSwitch} />

            <div className="grid lg:grid-cols-2 gap-8">
              <InputSection
                mode={state.mode}
                inputText={state.inputText}
                inputTokens={state.inputTokens}
                isProcessing={state.isProcessing}
                onInputTextChange={(value) => setState(prev => ({ ...prev, inputText: value }))}
                onInputTokensChange={(value) => setState(prev => ({ ...prev, inputTokens: value }))}
                onProcess={handleProcess}
              />

              <OutputSection
                mode={state.mode}
                outputText={state.outputText}
                outputTokens={state.outputTokens}
                error={state.error}
                onCopy={copyToClipboard}
                onDownload={downloadResult}
                inputText={state.inputText}
              />
            </div>
          </div>

          <StatsSection vocabularySize={vocabularySize} />
          <ViewMappingButton onClick={() => setShowMapping(true)} />
        </div>
      </div>

      <CharacterMappingModal 
        isOpen={showMapping} 
        onClose={() => setShowMapping(false)} 
      />
    </div>
  );
}
