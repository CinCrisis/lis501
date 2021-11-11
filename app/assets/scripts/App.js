import '../styles/styles.css'
import 'lazysizes'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
let stickyHeader = new StickyHeader()
let revealOnScroll = new RevealOnScroll()

if (module.hot) {
	module.hot.accept()
}
