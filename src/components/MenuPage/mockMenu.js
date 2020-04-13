const mockMenu = {
  id: 1,
  restaurant_id: 1,
  type: 'Lunch',
  note: '',
  sections: [
    {
      id: 1, section_id: 1, name: 'Soups & Salads',
      items: [
        { id: 1, section_id: 1, name: 'Chile', description: 'Spicy chili served with our house-made tortilla chips and garnished with sour cream and cheddar cheese', price: '$4.75/$6.75' },
        { id: 2, section_id: 1, name: 'Mixed Greens', description: 'Organic mixed greens tossed with our balsamic vinaigrette. Add roasted organic chicken breast: $3.50 Vegan & Gluten Free.', price: '$4.25' }
      ]
    },
    {
      id: 2, section_id: 2, name: 'Burgers',
      items: [
        { id: 3, section_id: 2, name: 'The Lowbrow Burger', description: 'Shredded lettuce, tomato and onion. Add cheddar, swiss, blue cheese, or three chili gouda $1.00 ADD BACON $2.00', price: '$9.75' }
      ]
    }

  ]
}

export default mockMenu;