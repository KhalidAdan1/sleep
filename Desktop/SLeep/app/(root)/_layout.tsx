// (root)/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {children}
      </div>
    )
  }
  
  // (root)/(tabs)/layout.tsx
  export default function TabsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {children}
      </div>
    )
  }