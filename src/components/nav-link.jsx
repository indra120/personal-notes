function NavLink({ children, active, onClick, icon: Icon }) {
  return (
    <a
      className={`flex items-center gap-x-3.5 py-2 px-2.5 ${
        active ? ' bg-gray-100' : ''
      } text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white`}
      href="#"
      onClick={onClick}
    >
      <Icon className="w-3.5 h-3.5" />
      {children}
    </a>
  )
}

export { NavLink }
