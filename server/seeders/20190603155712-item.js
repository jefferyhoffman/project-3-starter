'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('Items', [{
        name: 'Kong',
        price: 18000,
        quantity: 4,
        brand: 'STORM',
        img: '/images/id-01.png',
        description: 'The STORM Kong-X watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe. Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.',
        movement: 'Japanese',
        features: 'Half Bangle, Half Mesh',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 24mm L: 50mm',
        caseHeight: '7.2mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '195mm Adjustable',
        claspType: 'Mesh Clasp',
        weight: '28.5g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Donferg',
        price: 19000,
        quantity: 15,
        brand: 'STORM',
        img: '/images/id-02.png',
        description: 'The STORM Donferg is one of STORM’s most unique designed watches yet. Combining fashion and function, the Donferg comes on a textured silicone strap and carries a unique combination-inspired dial. It’s unique vertical spinning disc also carry ‘animation mode’, allowing wearers to show of the unique spinning function of the watch to friends!',
        movement: 'LED',
        features: 'Hour, Minute, Second and Date',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 45mm, L: 52mm',
        caseHeight: '11.2mm',
        waterRes: '50m',
        lensMaterial: 'Mineral',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '205mm Adjustable',
        claspType: 'Single-Fold Clasp',
        weight: '136g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Valena',
        price: 15000,
        quantity: 6,
        brand: 'STORM',
        img: '/images/id-03.png',
        description: 'The STORM Valena watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe. Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh. Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.',
        movement: 'Japanese',
        features: 'Half Bangle, Half Mesh',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 24mm L: 50mm',
        caseHeight: '7.2mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '195mm Adjustable',
        claspType: 'Mesh Clasp',
        weight: '28.5g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yang-X',
        price: 11000,
        quantity: 15,
        brand: 'STORM',
        img: '/images/id-04.png',
        description: 'The STORM Yang-X is a sporty looking watch with multifunction features. The  Yang-X has a dual time function meaning you can keep track of the time in 2 time zones. The 24 hour and date features make this watch a very useful accessory.  Made from brushed stainless steel with a deep green dial and waterproof to 50m.',
        movement: 'Japanese',
        features: 'Slim watch, date, curved glass.',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 40mm  L: 48mm',
        caseHeight: '7.5mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '200mm Adjustable',
        claspType: 'Double-fold clasp',
        weight: '87g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yawo-XL',
        price: 38000,
        quantity: 2,
        brand: 'STORM',
        img: '/images/id-05.png',
        description: 'The STORM Yawo-XL is a minimalist watch with a retro STORM feel. Based off the best selling Yawo-XL, this new take combines modern contemporary with sleek design. The silver strap is made from high quality brushed stainless steel, while the Yawo-XL blue dial is uniquely shaped to add dimension. The New Yawo-XL is water resistant.',
        movement: 'Japanese',
        features: 'Half Bangle, Half Mesh',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 40mm  L: 48mm',
        caseHeight: '7.5mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '200mm Adjustable',
        claspType: 'Double-fold clasp',
        weight: '87g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razar LTE',
        price: 22000,
        quantity: 10,
        brand: 'STORM',
        img: '/images/id-06.png',
        description: 'The STORM Razar LTE is the latest statement STORM LED watch. It’s futuristic rounded case features a sleek glass display with red LED lights displaying date, hour, minute and seconds at the press of a button. The Razar is made of high grade brushed stainless steel.',
        movement: 'LED',
        features: 'Hour, Minute, Second and Date',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 45mm L: 52mm',
        caseHeight: '11.2mm',
        waterRes: '50m',
        lensMaterial: 'Mineral',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '205mm Adjustable',
        claspType: 'Single-Fold  Clasp',
        weight: '136g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razar BLD',
        price: 22000,
        quantity: 10,
        brand: 'STORM',
        img: '/images/id-07.png',
        description: 'The STORM Razar BLD is the latest statement STORM LED watch. It’s futuristic rounded case features a sleek glass display with red LED lights displaying date, hour, minute and seconds at the press of a button. The Razar is made of high grade brushed stainless steel.',
        movement: 'LED',
        features: 'Hour, Minute, Second and Date',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 45mm L: 52mm',
        caseHeight: '11.2mm',
        waterRes: '50m',
        lensMaterial: 'Mineral',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '205mm Adjustable',
        claspType: 'Single-Fold Clasp',
        weight: '136g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slim-X  XL',
        price: 55000,
        quantity: 3,
        brand: 'STORM',
        img: '/images/id-08.png',
        description: 'The STORM Slim-X XL is a classic looking watch with a smart minimalist dial. The ultra slim silver strap is made from brushed and polished stainless steel with a sleek bottle green dial and gold number markers. The Slim-X XL is waterproof to 50m with a date feature.',
        movement: 'Japanese',
        features: 'Slim watch, date, curved glass.',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 40mm XL: 48mm',
        caseHeight: '7.5mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '200mm',
        claspType: 'Double-fold clasp',
        weight: '87g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Court-XS',
        price: 14000,
        quantity: 15,
        brand: 'STORM',
        img: '/images/id-09.png',
        description: 'The STORM Court-XS is designed to take you from desk to dancefloor. This petite watch sits with Swarovski Crystals making it the perfect accessory all year round.',
        movement: 'Japanese',
        features: 'Half Bangle, Half Mesh',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 24mm L: 50mm',
        caseHeight: '7.2mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: '3 Links Metal Band',
        fittingSize: '195mm',
        claspType: '14mm Double Folded Clasp',
        weight: '28.5g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'D-Nelli',
        price: 12000,
        quantity: 15,
        brand: 'STORM',
        img: '/images/id-10.png',
        description: 'The STORM D-Nelli is one of STORM’s most unique designed watches yet. Combining fashion and function, the  D-Nelli comes on a textured silicone strap and carries a unique combination-inspired dial. It’s unique vertical spinning disc also carry ‘animation mode’, allowing wearers to show of the unique spinning function of the watch to friends!',
        movement: 'Japanese',
        features: 'Disc Mechanism',
        caseMat: 'Alloy',
        caseSize: 'W: 44.5mm L: 51.5mm',
        caseHeight: '7.20mm',
        waterRes: 'None',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Silicon',
        fittingSize: '210mm',
        claspType: 'Buckle',
        weight: '97g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ten-Win',
        price: 68000,
        quantity: 2,
        brand: 'STORM',
        img: '/images/id-11.png',
        description: 'The Special Edition STORM  Ten-Win is a unique watch which uses a revolving disc movement to count the hours and minutes. The Magnitor features a semi visible disc designed in the shape of a bullet.Both the strap and case are made from brushed stainless steel and the watch is waterproof to 50m. This watch comes complete with a Special Edition presentation box and certificate.',
        movement: 'Japanese',
        features: 'Disc Mechanism',
        caseMat: 'Alloy',
        caseSize: 'W: 24mm L: 50mm',
        caseHeight: '7.2mm',
        waterRes: 'None',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '195mm Adjustable',
        claspType: 'Mesh Clasp',
        weight: '97g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mia-M',
        price: 28000,
        quantity: 13,
        brand: 'STORM',
        img: '/images/id-12.png',
        description: 'The STORM Mia-M is a modern, unisex watch and an effortlessly stylish addition to any wardrobe. This unique watch features a large edge to edge dial in a bold blue lazer finish , on a sleek slate mesh strap. The Terelo also has a handy date feature and is splash resistant. STORM’s Mia-M lazer blue may appear different colours under different lights.',
        movement: 'Quartz',
        features: 'Half Bangle, Half Mesh',
        caseMat: 'Stainless Steel',
        caseSize: 'W: 24mm L: 50mm',
        caseHeight: '7.20mm',
        waterRes: '50m',
        lensMaterial: 'Mineral Glass Plating: IP Rose Gold, IP Gold',
        caseBack: 'Stainless Steel',
        crown: 'Stainless Steel',
        bandType: 'Stainless Steel',
        fittingSize: '195mm Adjustable',
        claspType: 'Mesh Clasp',
        weight: '28.5g',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Item', null, {});
  }
};
