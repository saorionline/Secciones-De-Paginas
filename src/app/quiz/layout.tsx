export default function Layout({
    children,
}:{
        children: React.ReactNode
      })
      {
        return (
            <main>
              <nav>Navegación de Quiz</nav>
              
              {children}
            </main>
        )
      }
