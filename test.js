north_dishes = [
    'Phở',
    'Bánh cuốn',
    'Bánh gai',
    'Bánh đa',
    'Bún chả',
    'Kẹo lạc',
    'Bánh cay',
    'Bánh cốm',
    'Nem rán']

central_dishes = [
    'Bánh xèo',
    'Mì Quảng',
    'Bún bò',
    'Bánh bèo',
    'Cháo lươn',
    'Cơm hến',
    'Tương Nam Đàn',
    'Nhựt Thanh',
    'Bánh lọc',
    'Cao lầu'
]

south_dishes = [
    'Bánh xèo',
    'Canh chua cá lóc',
    'Bánh canh cua',
    'Hủ tiếu nam vang',
    'Bún riêu',
    'Phở',
    'Bánh mì',
    'Cơm tấm',
    'Bún mắm'
]

all_dishes = [
    'Phở',
    'Bánh mì',
    'Bánh cuốn',
    'Bánh gai',
    'Bánh đa',
    'Bánh cay',
    'Bánh cốm',
    'Bánh xèo',
    'Bánh bèo',
    'Bánh lọc',
    'Bánh canh cua',
    'Bún chả',
    'Bún bò',
    'Bún riêu',
    'Bún mắm',
    'Kẹo lạc',
    'Nem rán',
    'Cháo lươn',
    'Cơm hến',
    'Cơm tấm',
    'Cao lầu',
    'Canh chua cá lóc',
    'Mì Quảng',
    'Tương Nam Đàn',
    'Nhựt Thanh',
    'Hủ tiếu nam vang'
]

categories = ['Soup',
    'Desserts',
    'Rice / Noodles',
    'Meat / Veggies / Misc']

soups = ['Phở','Bánh canh cua','Bún bò','Bún riêu','Bún mắm', 
'Cháo lươn', 'Canh chua cá lóc', 'Mì Quảng', 'Hủ tiếu nam vang']
desserts = ['Bánh đa', 'Bánh cốm','Kẹo lạc','Tương Nam Đàn', 'Nhựt Thanh']
rice = [ 'Bánh gai', 'Bánh cay','Bánh xèo', 'Bánh bèo']
misc = ['Bánh mì','Bánh cuốn','Bánh lọc','Bún chả', 'Nem rán', 'Cơm hến', 'Cơm tấm', 'Cao lầu']

categories_color = [
    {
    label: 'Soup',
    value: soups.length,
    groupId: 'soup',
    itemStyle: {
        color: 'blue'
    }
},
    {
        label: 'Desserts',
        value: desserts.length,
        groupId: 'dessert',
        itemStyle: {
            color: 'red'
        }
    },
    {
        label: 'Rice / Noodles',
        value: rice.length,
        groupId: 'rice',
        itemStyle: {
            color: 'pink'
        }
    },
    {
        label: 'Meat & Veggies',
        value: misc.length,
        groupId: 'misc',
        itemStyle: {
            color: 'black'
        }
    }]