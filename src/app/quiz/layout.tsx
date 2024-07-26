import QuizMenu from '../../components/A-QuizMenu.js'

export default function Layout({
    children,
}:{
        children: React.ReactNode
      })
      {
        return (
            <main>
              <QuizMenu/>
              
              {children}
            </main>
        )
      }
