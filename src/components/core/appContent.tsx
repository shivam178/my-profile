import React from 'react';

export const AppContent = ({ children }: { children: React.ReactNode }) => {
  return <main className="p-7 h-full flex flex-col min-h-screen">{children}</main>;
};
