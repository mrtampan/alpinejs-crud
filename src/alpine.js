function myData() {
  return {
    addItemOpen: false,
    indexEdit: -1,
    memberGroup: [
      { id: 1, nama: 'Jihyo' },
      { id: 2, nama: 'Sana' },
      { id: 3, nama: 'Mina' },
      { id: 4, nama: 'Momo' },
      { id: 5, nama: 'Chaeyoung' },
      { id: 6, nama: 'Nayeon' },
      { id: 7, nama: 'Dahyun' },
      { id: 8, nama: 'Jeongyeon' },
    ],
    formAdd: {
      id: 0,
      nama: '',
    },
    formAddShow() {
      this.addItemOpen = !this.addItemOpen;
    },
    onEdit(idx) {
      this.addItemOpen = true;
      this.indexEdit = idx;
      this.formAdd = {
        id: this.memberGroup[idx].id,
        nama: this.memberGroup[idx].nama,
      };
    },
    onDelete(idx) {
      this.memberGroup.splice(idx, 1);
    },
    onSave() {
      if (this.indexEdit === -1) {
        this.memberGroup.push({
          id: this.formAdd.id,
          nama: this.formAdd.nama,
        });
      } else {
        this.memberGroup[this.indexEdit].id = this.formAdd.id;
        this.memberGroup[this.indexEdit].nama = this.formAdd.nama;
      }
      this.formAdd = {
        id: 0,
        nama: '',
      };
      this.indexEdit = -1;
    },
  };
}
