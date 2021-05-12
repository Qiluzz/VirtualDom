import diff from './diff'

export default function render(vitualDOM, container, oldDOM = container.firstChild) {
    diff(vitualDOM, container, oldDOM)
}
