import Alpine from 'alpinejs'
 
window.Alpine = Alpine

Alpine.data('dropdown', () => ({
          open: false,
          toggle() {
            this.open = ! this.open
          }
}),
'myData', () => ({
          firstname: 'heheh',
          lastname: 'huhuh'
}),
)

Alpine.start()
