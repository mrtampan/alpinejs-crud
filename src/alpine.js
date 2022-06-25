import Alpine from 'alpinejs'
 
window.Alpine = Alpine

Alpine.data('myData', () => ({
          open: false,
          toggle() {
            this.open = ! this.open
          },
          firstname: 'Chou',
          lastname: 'Tzuyu',
          gender: 'perempuan',
          hbdOpen: false,
          hbdTrigger(){
            this.hbdOpen = ! this.hbdOpen
          },
          memberGroup:[
            { id: 1, nama: 'Jihyo' },
            { id: 2, nama: 'Sana' },
            { id: 3, nama: 'Mina' },
            { id: 4, nama: 'Momo' },
            { id: 5, nama: 'Chaeyoung' },
            { id: 6, nama: 'Nayeon' },
            { id: 7, nama: 'Dahyun' },
            { id: 8, nama: 'Jeongyeon' },
        ]
})
)

Alpine.start()
