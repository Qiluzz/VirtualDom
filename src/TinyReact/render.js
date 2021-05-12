import diff from './diff'

export default function render(vitualDOM, container, oldDOM) {
    diff(vitualDOM, container, oldDOM)
}