'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: "Harry Potter and the Sorcer's Stone",
        author: "J.K. Rowling",
        imageURL: 'https://images.gr-assets.com/books/1474154022l/3.jpg',
        series: "Harry Potter",
        synopsis: "Harry Potter’s life is miserable. His parents are dead and he’s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he’s a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry. After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid.But even within the Wizarding community, he is special.He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry. Though Harry’s first year at Hogwarts is the best of his life, not everything is perfect.There is a dangerous secret object hidden within the castle walls, and Harry believes it’s his responsibility to prevent it from falling into evil hands.But doing so will bring him into contact with forces more terrifying than he ever could have imagined.Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high- stakes adventures to come."
      },
      {
  title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
      imageURL: "https://images.gr-assets.com/books/1474169725l/15881.jpg",
        series: "Harry Potter",
          synopsis: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike And strike it does. For in Harry’s second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockhart, a spirit named Moaning Myrtle who haunts the girls’ bathroom, and the unwanted attentions of Ron Weasley’s younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone -- or something -- starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects . . . Harry Potter himself? "
},

{
  title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rolling",
      imageURL: "https://images.gr-assets.com/books/1499277281l/5.jpg",
        series: "Harry Potter",
          synopsis: "Harry Potter’s third year at Hogwarts is full of new dangers. A convicted murderer, Sirius Black, has broken out of Azkaban prison, and it seems he’s after Harry. Now Hogwarts is being patrolled by the dementors, the Azkaban guards who are hunting Sirius. But Harry can’t imagine that Sirius or, for that matter, the evil Lord Voldemort could be more frightening than the dementors themselves, who have the terrible power to fill anyone they come across with aching loneliness and despair. Meanwhile, life continues as usual at Hogwarts. A top-of-the-line broom takes Harry’s success at Quidditch, the sport of the Wizarding world, to new heights. A cute fourth-year student catches his eye. And he becomes close with the new Defense of the Dark Arts teacher, who was a childhood friend of his father. Yet despite the relative safety of life at Hogwarts and the best efforts of the dementors, the threat of Sirius Black grows ever closer. But if Harry has learned anything from his education in wizardry, it is that things are often not what they seem. Tragic revelations, heartwarming surprises, and high-stakes magical adventures await the boy wizard in this funny and poignant third installment of the beloved series."
},
{
  title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rolling",
      imageURL: "https://images.gr-assets.com/books/1554006152l/6.jpg",
        series: "Harry Potter",
          synopsis: "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup. He wants to find out about the mysterious event that’s supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn’t happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he’s not normal - even by wizarding standards. And in his case, different can be deadly"
},
{
  title: "Harry Potter and the Order of the Pheonix",
    author: "J.K. Rolling",
      imageURL: "https://images.gr-assets.com/books/1546910265l/2.jpg",
        series: "Harry Potter",
          synopsis: "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named---a threat that neither the magical government nor the authorities at Hogwarts can stop. As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice. His fate depends on them all."
},
{
  title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rolling",
      imageURL: "https://images.gr-assets.com/books/1361039191l/1.jpg",
        series: "Harry Potter",
          synopsis: "When Harry Potter and the Half-Blood Prince opens, the war against Voldemort has begun. The Wizarding world has split down the middle, and as the casualties mount, the effects even spill over onto the Muggles. Dumbledore is away from Hogwarts for long periods, and the Order of the Phoenix has suffered grievous losses. And yet, as in all wars, life goes on. Harry, Ron, and Hermione, having passed their O.W.L. level exams, start on their specialist N.E.W.T. courses. Sixth-year students learn to Apparate, losing a few eyebrows in the process. Teenagers flirt and fight and fall in love. Harry becomes captain of the Gryffindor Quidditch team, while Draco Malfoy pursues his own dark ends. And classes are as fascinating and confounding as ever, as Harry receives some extraordinary help in Potions from the mysterious Half-Blood Prince. Most importantly, Dumbledore and Harry work together to uncover the full and complex story of a boy once named Tom Riddle—the boy who became Lord Voldemort. Like Harry, he was the son of one Muggle-born and one Wizarding parent, raised unloved, and a speaker of Parseltongue. But the similarities end there, as the teenaged Riddle became deeply interested in the Dark objects known as Horcruxes: objects in which a wizard can hide part of his soul, if he dares splinter that soul through murder. Harry must use all the tools at his disposal to draw a final secret out of one of Riddle’s teachers, the sly Potions professor Horace Slughorn. Finally Harry and Dumbledore hold the key to the Dark Lord’s weaknesses... until a shocking reversal exposes Dumbledore’s own vulnerabilities, and casts Harry’s—and Hogwarts’s—future in shadow."
},
{
  title: "Harry Potter and Deathly Hallows",
    author: "J.K. Rolling",
      imageURL: "https://images.gr-assets.com/books/1474171184l/136251.jpg",
        series: "Harry Potter",
          synopsis: "Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind. The protective charm that has kept him safe until now is broken. But the Dark Lord is breathing fear into everything he loves. And he knows he can’t keep hiding. To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them. He will have to face his enemy in one final battle."
},
{
  title: "The 48 Laws of Power",
    author: "Robert Greene",
      imageURL: "https://images.gr-assets.com/books/1385228992l/1303.jpg",
        series: "",
          synopsis: "This amoral, cunning, ruthless, and instructive book synthesizes the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz with the historical legacies of statesmen, warriors, seducers, and con men throughout the ages."
},
{
  title: "Mastery",
    author: "Robert Greene",
      imageURL: "https://images.gr-assets.com/books/1348274726l/13589182.jpg",
        series: "",
          synopsis: "The #1 New York Times–bestselling sequel to The 48 Laws of Power Mastery synthesizes the years of research Robert Greene conducted while writing the international bestsellers The 48 Laws of Power, The 33 Strategies of War, and The Art of Seduction and demonstrates that the ultimate form of power is mastery itself. By analyzing the lives of such past masters as Charles Darwin, Benjamin Franklin, Albert Einstein, and Leonard da Vinci, as well as by interviewing nine contemporary masters, including tech guru Paul Graham and animal rights advocate Temple Grandin, Greene debunks our culture’s many myths about genius and distills the wisdom of the ages to reveal the secret to greatness. With this seminal text as a guide, readers will learn how to unlock the passion within and become masters."
},
    ], { });
  },

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Books', null, {});
}
};
