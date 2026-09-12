"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const CesiumMap = dynamic(() => import('./CesiumMap'), { ssr: false });

export default function CesiumMapWrapper() {
  return <CesiumMap />;
}
