const osmp2p = require('osm-p2p')
const html = require('choo/html')
const choo = require('choo')

const app = choo()
const osm = osmp2p('db')

app.use(function (state, emitter) {
  osm.create({ id: 'A', lat: 64.5, lon: -147.6 }, function (err, key, node) {
    if (err) return console.error(err)
    console.log('key', key, node)
    state.key = key
    state.node = node
    emitter.emit('render')
  })
})

app.route('/', main)
app.mount('#app')

function main (state, emit) {
  var node = state.node ? JSON.stringify(state.node) : ''
  var key = state.key || ''

  return html`<div class="" style="margin-top:30px;">
    hi ${key} ${node}
  </div>`
}
