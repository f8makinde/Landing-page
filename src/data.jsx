 import SingleIcon from './assets/single.png'
 import DoubleIcon from './assets/double.png'
 import TripleIcon from './assets/triple.png'
 const Cards = [
    {
       id: 0,
       image: SingleIcon,
       name: 'Single User',
       price: 149,
       btn: 'Start Trail',
       list: ['500 Gb Storage','1 User Allowed', 'Send up to 2GB']
    },
    {
        id: 1,
        image: DoubleIcon,
        name: 'PartnerShip',
        price: 199,
        btn: 'Start Trail',
        list: ['1 TB Storage','3 Users Allowed', 'Send up to 10GB']
     },
     {
        id: 2,
        image: TripleIcon,
        name: 'Group Account',
        price: 299,
        btn: 'Start Trail',
        list: ['5 TB Storage','10 Users Allowed','Send up to 20GB']
     }
]

export {Cards}

