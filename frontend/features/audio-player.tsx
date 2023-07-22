'use client';

import { useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function AudioPlayer() {

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#4F4A85',
      progressColor: '#383351',
      url: '/audio.mp3',
    })
  }, [])

  return <div id="waveform">audio player :)</div>
}