interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  )
}