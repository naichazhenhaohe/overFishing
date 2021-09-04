import * as React from 'react'
import ReactDOM from 'react-dom'

import tenor from '@/asset/img/tenor.gif'
import './index.scss'

export default ({ rootName }: { rootName: string }) => {
  const el = document.createElement('div') as HTMLDivElement
  const [isBackTopVisible, setIsBackTopVisible] = React.useState<Boolean>(false)

  const handleScroll = () => {
    setIsBackTopVisible((document.getElementById(rootName)?.scrollTop || 0) > 300)
  }

  React.useEffect(() => {
    const root = document.getElementById(rootName)

    root?.appendChild(el)
    root?.addEventListener('scroll', handleScroll)
    return () => {
      root?.removeChild(el)
      root?.removeEventListener('scroll', handleScroll)
    }
  })

  const handleClick = () => {
    const root = document.getElementById(rootName)

    root?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  if (el) {
    return ReactDOM.createPortal(
      <div className="back-top-box" onClick={handleClick}>
        {isBackTopVisible && <img src={tenor} alt="" />}
      </div>,
      el
    )
  }
  return null
}
