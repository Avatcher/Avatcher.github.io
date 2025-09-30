import "./layout.css"

function Footer() {
  function Opt(args: Readonly<{text: string, url: string}>) {
    return <li><a href={args.url}>{args.text}</a></li>
  }
  function FakeOpt(args: Readonly<{text: string, url: string}>) {
    return <li><a className="fake">
        <span className="material-symbols-outlined">lock</span>
        {args.text}
      </a>
    </li>
  }
  return <footer>
      <ul>
        <Opt text="Homepage" url="/"/>
        <Opt text="About" url="/about"/>
        <Opt text="Contact" url="/contact"/>
      </ul>
      <ul>
        <Opt text="Repository" url="https://github.com/Avatcher/Avatcher.github.io"/>
      </ul>
      <ul>
        <FakeOpt text="Crumden SMP" url="/article/crumden-smp"/>
      </ul>
    </footer>
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
    <Footer/>
  </>
}