
class FakeData{
    static itemData(){
        return [
                  {key: 10, name: 'Soup'},
                  {key: 20, name: 'Sardines'},
                  {key: 30, name: 'Garlic bread'},
                  {key: 40, name: 'Battered Cod'},
                  {key: 50, name: 'Lasagne'},
                  {key: 60, name: 'Burrito'},
                  {key: 70, name: 'Bread and butter pudding'},
                  {key: 80, name: 'Ice cream'},
                  {key: 90, name: 'Jelly'},
                  {key: 11, name: 'Prawns and Salmon'},
                  {key: 21, name: 'Christmas Soup'},
                  {key: 31, name: 'Brandy'},
                  {key: 41, name: 'Turkey'},
                  {key: 51, name: 'Ham'},
                  {key: 61, name: 'Beef'},
                  {key: 42, name: 'Chips'},
                  {key: 52, name: 'Potato Waffles'},
                  {key: 62, name: 'Beans'},
                  {key: 43, name: 'Peas'},
                  {key: 53, name: 'Green Beans'},
                  {key: 63, name: 'Cauliflower'},
                  {key: 110, name: 'Long island iced tea'},
                  {key: 120, name: 'Juice'},
                  {key: 130, name: 'Water'},
                  {key: 111, name: 'Brie'},
                  {key: 121, name: 'Cheddar'},
                  {key: 131, name: 'Edam'},
        ];
      };
    
      static getData(){
    
        let data = [
          {
            date: '2020-04-18',
            courses: [
              {
                key: 1000,
                sections: [
                  { 
                    key: 2000, name: "Starter", 
                    required: false,
                    minimum: 0,
                    maximum: 1,
                    items: [
                      {key: 10, name: 'Soup'},
                      {key: 20, name: 'Sardines'},
                      {key: 30, name: 'Garlic bread'},
                    ]
                  }
                ]
              },
              {
                key: 3000,
                sections: [
                  { 
                    key: 4000, name: "Mains", 
                    required: true,
                    minimum: 0,
                    maximum: 1,
                    items: [
                      {key: 40, name: 'Battered Cod'},
                      {key: 50, name: 'Lasagne'},
                      {key: 60, name: 'Burrito'},
                    ]
                  },
                  { 
                    key: 5000, name: "Sides", 
                    required: false,
                    minimum: 0,
                    maximum: 2,
                    items: [
                      {key: 42, name: 'Chips'},
                      {key: 52, name: 'Potato Waffles'},
                      {key: 62, name: 'Beans'},
                    ]
                  },
                  { 
                    key: 6000, name: "Veggies", 
                    required: true,
                    minimum: 1,
                    maximum: 3,
                    items: [
                      {key: 43, name: 'Peas'},
                      {key: 53, name: 'Green Beans'},
                      {key: 63, name: 'Cauliflower'},
                    ]
                  }
                ]
              },
              {
                key: 7000,
                sections:[
                  { 
                    key: 8000, name: "Puddings", 
                    required: false,
                    minimum: 0,
                    maximum: 1,
                    items: [
                      {key: 70, name: 'Bread and butter pudding'},
                      {key: 80, name: 'Ice cream'},
                      {key: 90, name: 'Jelly'},
                    ]
                  }
                ]
              }
              ,
              {
                key: 9000,
                sections:[
                  { 
                    key: 5, name: "Drinks", 
                    required: false,
                    minimum: 0,
                    maximum: 1,
                    items: [
                      {key: 110, name: 'Long island iced tea'},
                      {key: 120, name: 'Juice'},
                      {key: 130, name: 'Water'},
                    ]
                  }
                ]
              },
              {
                key: 10000,
                sections:[
                  { 
                    key: 11000, name: "Cheeses", 
                    required: false,
                    minimum: 0,
                    maximum: 2,
                    items: [
                      {key: 111, name: 'Brie'},
                      {key: 121, name: 'Cheddar'},
                      {key: 131, name: 'Edam'},
                    ]
                  }
                ]
              }
            ]
          }
        ];
      
        return data;
    }
}

export default FakeData;

 
