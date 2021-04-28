export const codeValidation = [
    v => !!v || 'من فضلك ادخل الكود',
    v => (v && !isNaN(parseInt(v))) || 'يجب ان يكون الكود عدد',
    // v => v.length <= 10 || 'Name must be less than 10 characters',
]

export const getTrName = code => {
    const items = [
        {
            text : 'مشتريات',
             transSerial: 19,
        },
        {
            text : 'مرتجع مشتريات',
             transSerial: 26,
        },
        {
            text : 'مبيعات',
             transSerial: 30,
        },
        {
            text : ' مرتجع مبيعات',
             transSerial: 20,
        },
        {
            text : ' صرف تحويلات ',
             transSerial: 27,
        },
        {
            text : ' استلام تحويلات',
             transSerial: 22,
        },
        {
            text : ' رصيد اول مدة',
             transSerial: 24,
        },
        
        {
            text : 'مراجعة اسعار',
             transSerial: -1,
        },
        {
            text : 'ادوات الجرد',
             transSerial: 31,
        },
    ]

    let item = items.filter(i => {
        return i.transSerial == code ? i : ''
    })
    // console.log(i.transSerial)
    // console.log(code)
    console.log(item)
    return item[0].text
}