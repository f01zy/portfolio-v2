"use client"

import styles from "@/ui/Navigation/Navigation.module.scss"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { social_links } from "@/config"
import { useState } from "react";
import { useActions } from "@/hooks/actions.hook";
import { useTypedSelector } from "@/hooks/selector.hook";

const Navigation = () => {
  const pathname = usePathname()
  const [mobile, setMobile] = useState<boolean>(false)
  const dispatch = useActions()
  const { theme } = useTypedSelector(state => state.settingsSlice)

  const links = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/#projects" },
    { text: "Tech", href: "/#tech" },
    { text: "Contact", href: "/#contact" },
    { text: "Blog", href: "/blog" },
  ]

  return <div>
    <nav className={styles.navigation}>
      <div className={styles.col}>
        <div className={styles.logo}>
          <h2>&lt;&gt;Aminov Ali&lt;/&gt;</h2>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.links}>
          {links.map((el, index) => (
            <Link href={el.href} key={index} className={pathname === el.href ? styles.active_link : ""}>{el.text}</Link>
          ))}
        </div>
        <div className={styles.theme} onClick={() => dispatch.setTheme(theme == "dark" ? "ligth" : "dark")}>
          {theme == "dark" ? (
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9317 6.92833C10.7217 7.675 10.6167 8.45667 10.6167 9.25C10.6167 14.01 14.49 17.8833 19.25 17.8833C20.0433 17.8833 20.825 17.7783 21.5717 17.5683C20.3583 20.555 17.4183 22.6667 14 22.6667C9.49667 22.6667 5.83333 19.0033 5.83333 14.5C5.83333 11.0817 7.945 8.14167 10.9317 6.92833ZM14 4C8.20167 4 3.5 8.70167 3.5 14.5C3.5 20.2983 8.20167 25 14 25C19.7983 25 24.5 20.2983 24.5 14.5C24.5 13.9633 24.4533 13.4267 24.3833 12.9133C23.24 14.5117 21.3733 15.55 19.25 15.55C15.7733 15.55 12.95 12.7267 12.95 9.25C12.95 7.13833 13.9883 5.26 15.5867 4.11667C15.0733 4.04667 14.5367 4 14 4Z" fill="white" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" fill="#000000"><path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" /></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
          )}
        </div>
      </div>
      <div className={styles.col}>
        <div className={mobile ? styles.menu_button_active : styles.menu_button} onClick={() => setMobile(!mobile)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    {mobile && (
      <div className={styles.mobile}>
        <div className={styles.links}>
          <ul>
            {links.map((el, index) => (
              <li key={index} onClick={() => setMobile(false)}><Link href={el.href} className={pathname === el.href ? styles.active_link : ""}>{el.text}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <ul>
            <li onClick={() => dispatch.setTheme(theme == "dark" ? "ligth" : "dark")}>
              {theme == "dark" ? (
                <svg width="36" height="36" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9317 6.92833C10.7217 7.675 10.6167 8.45667 10.6167 9.25C10.6167 14.01 14.49 17.8833 19.25 17.8833C20.0433 17.8833 20.825 17.7783 21.5717 17.5683C20.3583 20.555 17.4183 22.6667 14 22.6667C9.49667 22.6667 5.83333 19.0033 5.83333 14.5C5.83333 11.0817 7.945 8.14167 10.9317 6.92833ZM14 4C8.20167 4 3.5 8.70167 3.5 14.5C3.5 20.2983 8.20167 25 14 25C19.7983 25 24.5 20.2983 24.5 14.5C24.5 13.9633 24.4533 13.4267 24.3833 12.9133C23.24 14.5117 21.3733 15.55 19.25 15.55C15.7733 15.55 12.95 12.7267 12.95 9.25C12.95 7.13833 13.9883 5.26 15.5867 4.11667C15.0733 4.04667 14.5367 4 14 4Z" fill="white" />
                </svg>
              ) : (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" fill="#000000"><path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" /></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
              )}
            </li>
            <li>
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9884 2.33327C7.54837 2.33327 2.33337 7.55993 2.33337 13.9999C2.33337 20.4399 7.54837 25.6666 13.9884 25.6666C20.44 25.6666 25.6667 20.4399 25.6667 13.9999C25.6667 7.55993 20.44 2.33327 13.9884 2.33327ZM22.0734 9.33327H18.6317C18.2584 7.87493 17.7217 6.47493 17.0217 5.17993C19.1684 5.91493 20.9534 7.40827 22.0734 9.33327ZM14 4.71327C14.9684 6.11327 15.7267 7.66493 16.2284 9.33327H11.7717C12.2734 7.66493 13.0317 6.11327 14 4.71327ZM4.97004 16.3333C4.78337 15.5866 4.66671 14.8049 4.66671 13.9999C4.66671 13.1949 4.78337 12.4133 4.97004 11.6666H8.91337C8.82004 12.4366 8.75004 13.2066 8.75004 13.9999C8.75004 14.7933 8.82004 15.5633 8.91337 16.3333H4.97004ZM5.92671 18.6666H9.36837C9.74171 20.1249 10.2784 21.5249 10.9784 22.8199C8.83171 22.0849 7.04671 20.6033 5.92671 18.6666ZM9.36837 9.33327H5.92671C7.04671 7.3966 8.83171 5.91493 10.9784 5.17993C10.2784 6.47493 9.74171 7.87493 9.36837 9.33327ZM14 23.2866C13.0317 21.8866 12.2734 20.3349 11.7717 18.6666H16.2284C15.7267 20.3349 14.9684 21.8866 14 23.2866ZM16.73 16.3333H11.27C11.165 15.5633 11.0834 14.7933 11.0834 13.9999C11.0834 13.2066 11.165 12.4249 11.27 11.6666H16.73C16.835 12.4249 16.9167 13.2066 16.9167 13.9999C16.9167 14.7933 16.835 15.5633 16.73 16.3333ZM17.0217 22.8199C17.7217 21.5249 18.2584 20.1249 18.6317 18.6666H22.0734C20.9534 20.5916 19.1684 22.0849 17.0217 22.8199ZM19.0867 16.3333C19.18 15.5633 19.25 14.7933 19.25 13.9999C19.25 13.2066 19.18 12.4366 19.0867 11.6666H23.03C23.2167 12.4133 23.3334 13.1949 23.3334 13.9999C23.3334 14.8049 23.2167 15.5866 23.03 16.3333H19.0867Z" fill="white" />
              </svg>
            </li>
          </ul>
          <ul>
            {social_links.map((el, index) => (
              <li key={index}><Link href={el.href}>{el.svg}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
}

export default Navigation;