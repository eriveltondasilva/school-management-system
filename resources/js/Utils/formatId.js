export default function formatId(id = 0, pad = 4, prefix = '0') {
  return '#' + id.toString().padStart(pad, prefix)
}
