import React, { useState } from "react";
import Bollywood from "./Bollywood";
import Home from "./Home";
import Fitness from "./Fitness";
import Food from "./Food";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Error from './Error';
import DynamicComp from "./DynamicComp";
import storeData from "../app/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Latest = () => {
  const [data, setData] = useState([
    {
      id: 1,
      heading:
        "WATCH: AI imagines Aishwarya Rai, Kareena Kapoor, Katrina Kaif as Barbie",
      image:
        "https://www.masala.com/cloud/2023/07/27/Screenshot-2023-07-27-at-9.38.41-PM.png",
      description:
        "Netizens have been going gaga over an AI-generated video of Bollywood actresses as if they were Barbie in the Barbie movie.",
      largdesc:"Netizens have been going gaga over an AI-generated video of Bollywood actresses as if they were Barbie in the Barbie movie.The video shows Margot Robbie being replaced by Aishwarya Rai, Kareena Kapoor, Katrina Kaif, Alia Bhatt, and Rashmika Mandanna.",
      cat: "Bollywood",
    },
    {
      id: 2,
      heading:
        "OMG 2: Watch as Akshay Kumar wows performing Lord Shiva's Tandava dance in new song “Har Har Mahadev",
      image:
        "https://www.masala.com/cloud/2023/07/27/My-project-2023-07-27T120531.641.jpg",
      description:
        "OMG 2 has released a new song called “Har Har Mahadev,” which opens with a captivating display of Akshay Kumar and Shiva devotees performing the Tandava dance",
        largdesc: " OMG 2 has released a new song called “Har Har Mahadev,” which opens with a captivating display of Akshay Kumar and Shiva devotees performing the Tandava danceadorned in traditional attire with ash smeared on their faces",
      cat: "Bollywood",
    },
    {
      id: 3,
      heading:
        "Gadar 2: Director Anil Sharma reveals Sunny Deol's first reaction upon hearing the script",
      image:
        "https://www.masala.com/cloud/2023/07/28/p3fDin0w-et00338629-jhbxncvkjt-landscape.jpg",
      description:
        "Sunny Deol is all set to bring back his role as Tara Singh in Gadar 2. On Wednesday, the trailer of the film is finally dropped and the fans are in awe witnessing Sunny's charm as he brings out his true patriotism.",
        largdesc:"Sunny Deol is all set to bring back his role as Tara Singh in Gadar 2. On Wednesday, the trailer of the film is finally dropped and the fans are in awe witnessing Sunny's charm as he brings out his true patriotism. The actor is reprising his role after two decades with a different yet connected script from where the story left. Now, director Anil Sharma has revealed Sunny's first reaction upon hearing the script of Gadar 2",
      cat: "Bollywood",
    },
    {
      id: 4,
      heading:
        "Ayushmann Khurrana is taking inspiration for “Dream Girl 2” from Aamir Khan and 2 other megastars -Can you guess who?",
      image:
        "https://www.masala.com/cloud/2023/07/27/My-project-2023-07-27T144141.938.jpg",
      description:
        "Ayushmann Khurrana, known for his inclination towards unconventional roles and scripts, is preparing for the release of his upcoming movie 'Dream Girl 2",
        largdesc:"Ayushmann Khurrana, known for his inclination towards unconventional roles and scripts, is preparing for the release of his upcoming movie 'Dream Girl 2where he portrays the role of a cross-dresser. To perfect his performance, he drew inspiration from acclaimed actor Aamir Khan who essayed a similar role in Baazi",
      cat: "Bollywood",
    },
    {
      id: 5,
      heading:
        "Jawan's FIRST song 'Zinda Banda'will see Shah Rukh Khan",
      image:
        "https://www.masala.com/cloud/2023/07/27/My-project-2023-07-27T123335.177.jpg",
      description:
        "The highly anticipated film “Jawan” is gearing up for the release of its first song, 'Zinda Banda",
        largdesc:"Jawan's FIRST song 'Zinda Banda'will see Shah Rukh Khan perform with a whopping 1000+ female dancersThe highly anticipated film “Jawan” is gearing up for the release of its first song, 'Zinda Banda' and fans are eagerly awaiting its grandeur. The recently unveiled Jawan prevue has already impressed audiences with its action-packed and thrilling content. Now, it's time to get ready for a dance extravaganza with the renowned South musician Anirudh Ravichander's composition",
      cat: "Bollywood",
    },
    {
      id: 6,
      heading:
        "Shiv Thakare Desires To Go On A Date To Paris With This Bollywood Actress",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-27t181154.796-16904617263x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Now, in a recent interview, he said that he wants to go out on a date with the Bajirao Mastani actress, Deepika Padukone.",
        largdesc: "Now, in a recent interview, he said that he wants to go out on a date with the Bajirao Mastani actress, Deepika Padukone.He said, “Although I like Alia Bhatt, I would like to go on a date with Deepika Padukone.” He also revealed where exactly he wanted to take her. He replied, “There is a cafe in the Eiffel Tower of Paris where I would like to go on a date with her. The Eiffel Tower is tall and Deepika is tall so I would like to go there",
      cat: "Bollywood",
    },
    {
      id: 7,
      heading:
        "Bollywood celebs Heap praise on 'Rocky And Rani kii Prem Kahani,call Ranveer-Alia starrer must watch",
      image:
        "https://static.toiimg.com/thumb/msid-102142318,imgsize-647836,width-400,resizemode-4/102142318.jpg",
      description:
        "The release of the much-awaited Alia Bhatt-Ranveer Singh starrer 'Rocky Aur Rani Ki Prem Kahani' hits the theatres today.",
        largdesc:"The release of the much-awaited Alia Bhatt-Ranveer Singh starrer 'Rocky Aur Rani Ki Prem Kahani' hits the theatres today. The movie marks the return of Kjo to what he does best - churning out over-the-top, feel-good family dramas, with more than a heavy dollop of romance! For those who grew up on a staple diet of colourful, lavish 'quintessentially Bollywood'movies, 'RARKPK' heralds a season of nostalgia",
      cat: "Bollywood",
    },
    {
      id: 8,
      heading:
        "CCONFIRMED: Arjun Kapoor to play the villain in Ajay Devgn & Rohit Shetty’s Singham Again",
      image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/09/CONFIRMED-Arjun-Kapoor-to-play-the-villain-in-Ajay-Devgn-Rohit-Shettys-Singham-Again.jpeg",
      description:
        "Rohit Shetty's Singham Again is among the most awaited films of Indian Cinema, with one of the biggest ensemble cast of all time",
        largdesc:"Rohit Shetty's Singham Again is among the most awaited films of Indian Cinema, with one of the biggest ensemble cast of all time. The film stars Ajay Devgn, Kareena Kapoor, Ranveer Singh, Akshay Kumar and Deepika Padukone in lead roles with Tiger Shroff as the baddie carrying the story of Sooryavanshi forward. Bollywood Hungama has confirmed news that the newest member of Rohit Shetty cop universe is Arjun Kapoor.",
      cat: "Bollywood",
    },
    {
      id: 9,
      heading:
        "'Satyaprem Ki Katha' box office collection: The Kartik Aaryan And Kiara starrer collects Rs125 creore",
      image:
        "https://static.toiimg.com/thumb/msid-102101036,imgsize-26110,width-400,resizemode-4/102101036.jpg",
      description:
        "“For me, it showed compatibility, romance and is so endearing. I thought it is an interesting story to tell, but obviously, you can't make it only about that.",
        largdesc:" “For me, it showed compatibility, romance and is so endearing. I thought it is an interesting story to tell, but obviously, you can't make it only about thatSo I started penning down my thoughts, why does this girl not want to sleep next to this boy and from there it took me to different areas, and I figured out who these two characters were. But the genesis was snoring,",
      cat: "Bollywood",
    },
    {
      id: 10,
      heading:
        "Alia Bhatt reveals why she did not promote Heart of Stone with Gal Gadot, says she is thankful for all the love from her fans",
      image:
        "https://images.indianexpress.com/2023/08/alia-bhatt-17.jpg?w=640",
      description:
        "Alia Bhatt shared why she has not been promoting her Hollywood debut Heart of Stone with Gal Gadot",
        largdesc:"Alia Bhatt made her big Hollywood debut last Friday with Gal Gadot and Jamie Dornan starrer Heart of Stone. But unlike other Indian stars whose Hollywood debuts had them touring the US and appearing on many international magazine covers and late night talk shows, Alia wasn’t seen doing any of that. During a recent AMA session on Instagram, Alia was asked why she wasn’t promoting her film and the actor shared the reason",
      cat: "Bollywood",
    },
    {
      id: 11,
      heading:
        "Bollywood film 'Bawaal'accused of trivializing Holocaust and demeaning victims",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/230728002044-bollywood-india-holocaust-controversy-intl-hnk.jpg?c=16x9&q=h_540,w_960,c_fill/f_webp",
      description:
        "The Simon Wiesenthal Center (SWC) on Tuesday urged Amazon Prime to take down “Bawaal” from its platform because of the “outlandish abuse of the Nazi Holocaust as a plot device.”",
      largdesc:"The Simon Wiesenthal Center (SWC) on Tuesday urged Amazon Prime to take down “Bawaal” from its platform because of the “outlandish abuse of the Nazi Holocaust as a plot device.The film, which is directed by Indian filmmaker Nitesh Tiwari and stars well-known actors Janhvi Kapoor and Varun Dhawan, tells the story of a narcissistic history professor who is embarrassed by his wife's epilepsy. They travel to Europe to prominent World War II sites, where their love for one another deepens. Scenes from the past and present are intertwined in the film.",
      cat: "Bollywood",
    },
    {
      id: 12,
      heading:
        "Vicky Kaushal recalls dad's struggles to survive in Bollywood: 'He set himself on fire, broke his hand but couldn't afford to fix it",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ejGk3.img?w=534&h=296&m=6&x=180&y=136&s=534&d=332",
      description:
        "Actor Vicky Kaushal opened up about how the values instilled in him by his parents have shaped his understanding of money and hard work.",
         largdesc:"Actor Vicky Kaushal opened up about how the values instilled in him by his parents have shaped his understanding of money and hard work.He said that growing up, his parents never hid their struggles from him and his brother Sunny, which made him value what they had more. In an interview with Film Companion, Vicky also spoke about the hardships that his father, the action director Sham Kaushal, had to face in his career, and revealed that he wasn't allowed to drive the family's second car because he hadn't earned it himself.",
      cat: "Bollywood",
    },
    {
      id: 13,
      heading:
        "BOLLYWOOD star Ananya Panday was spotted watching the new Barbie movie with rumoured boyfriend Aditya Roy Kapur",
      image:
        "https://www.thesun.co.uk/wp-content/uploads/2023/07/62b67bbc-677b-45a3-86ca-ebf5db170f0f.jpg?w=670",
      description:
        "Romance rumours are fuelling as this is the second time the Indian actors were seen together, days after they were snapped in the same car.",
      cat: "Bollywood",
    },
    {
      id: 14,
      heading:
        "Akshay Kumar's Dragon Eye LED bag takes internet by storm; can you guess its price?",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bSdLG.img?w=534&h=300&m=6&x=0&y=110&s=301&d=158",
      description:
        "Bollywood star Akshay Kumar was papped at the Mumbai airport on Monday. He recently returned from Uttarakhand after shooting for his upcoming film Oh My God- OMG 2. The actor's latest airport look has left his fans stunned as he paired his black athleisure look with a funky bag that literally looked like a dragon's face. Photos and videos of Kumar's outfit and bag are going viral on social media",
      cat: "Bollywood",
    },
    {
      id: 15,
      heading:
        "Ranveer Singh 'bewildered' at how Karan Johar can be 'feminine and masculine at the same time'; Alia Bhatt says, 'Karan is Karan'",
      image:
        "https://images.indianexpress.com/2023/07/ranveer-alia-karan-.jpg?w=640",
      description:
        "Alia, Ranveer and Karan participated in India's International Movement to Unite Nations (IIMUN's) Back to School series to promote the film recently. At the event, Ranveer wondered if Karan is more like Miss Braganza (Archana Puran Singh) from the film Kuch Kuch Hota hai or Narayan Shankar (Amitabh Bachchan) from Mohabbatein. But Alia told him, he is neither. “Karan is Karan. You have to create a new character for him,” she said",
      cat: "bollywood",
    },
    {
      id: 16,
      heading:
        "NewsLifestyleLife-StyleShraddha Kapoor opens up on her fitness routine, beauty secrets, favourite cuisine",
         
      image:
        "https://images.indianexpress.com/2023/07/shraddha-kapoor.jpg?w=640",
      description:
        " My fitness mantra revolves around consistency, balance and self-care. I believe in making fitness a part of my daily routine and prioritising it alongside my other commitments.",
         largdesc:"NewsLifestyleLife-StyleShraddha Kapoor opens up on her fitness routine, beauty secrets, favourite cuisine and biggest learnings in life Shraddha Kapoor opens up on her fitness routine, beauty secrets, favourite cuisine and biggest learnings in lifeI aim for a well-rounded approach that includes a combination of cardio, strength training and flexibility exercises. Variety keeps me motivated and prevents boredom. Listening to my body and giving it adequate rest and recovery is equally important. Nourishing my body with wholesome foods and staying hydrated are key components of my fitness journey.",
      cat: "Fitness",
    },
    {
      id: 17,
      heading:
        "Study finds isometric exercises like planks twice as effective for lowering blood pressure; expert weighs in",
      image:
        "https://images.indianexpress.com/2023/07/plank_1200_getty.jpg?w=640",
      description:
        "Unlike what has long been considered, a new study claims that isometric exercises that require the body to be held in one position can be twice as effective as moderate-intensity aerobic activity.",
         largdesc:"Unlike what has long been considered, a new study claims that isometric exercises that require the body to be held in one position can be twice as effective as moderate-intensity aerobic activity.While the results showed that significant reductions in resting systolic and diastolic blood pressure occurred after all exercise types, it was specifically isometric exercises like planks and wall sits or wall squats that were most effective, reported the study published in the British Journal of Sports Medicine.",
      cat: "Fitness",
    },
    {
      id: 18,
      heading:
        "This is Sunny Leone's 'favourite thing to do ever'; know how it helps your body",
      image:
        "https://images.indianexpress.com/2023/07/sunny-leone_1200_insta.jpg?w=640",
      description:
        "Sunny Leone, known for her candid nature, never misses a chance to delight her fans and followers by showcasing her fun personal moments.",
         largdesc:"Sunny Leone, known for her candid nature, never misses a chance to delight her fans and followers by showcasing her fun personal moments.Recently, the actor was spotted relishing a leisurely skating session in Dubai.The Kennedy actor rightfully captioned the post, “My favourite thing to do ever!”Taking some inspiration from her, we reached out to find out how skating can help you as a challenging and fun activity.",
      cat: "Fitness",
    },
    {
      id: 19,
      heading:
        "Shweta Kawaatra on starting her fitness journey at 40: 'I wish I had started when I was 15 or 16",
      image:
        "https://images.indianexpress.com/2023/07/shweta-kawaatra.jpg?w=640",
      description:
        "It's never too late to embark on your fitness journey because every step forward is an investment in your well-being and vitality.",
         largdesc:"It's never too late to embark on your fitness journey because every step forward is an investment in your well-being and vitality.Regardless of age or fitness level, taking care of your body and prioritising fitness can lead to numerous benefits. Engaging in regular physical activity not only improves physical health, strength, and flexibility but also enhances mental clarity and emotional well-being. As such, Shweta Kawaatra is glad to have started her fitness journey at 40",
      cat: "Fitness",
    },
    {
      id: 20,
      heading: "10 Wonder Dry Fruits to Include in Your Daily Diet",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/04/wp-image-867-16820857213x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Dry fruits are not only delicious but also power-packed with essential nutrients that can greatly benefit your health.",
         largdesc:"Dry fruits are not only delicious but also power-packed with essential nutrients that can greatly benefit your health.Including them in your daily diet can provide you with a wide range of vitamins, minerals, and antioxidants, boosting your immunity, improving digestion, and even providing relief from digestive disorders. Let’s look at ten wonder dry fruits suggested by Marisha Baurai, Food & Innovation Technologist, Farmley that you should consider incorporating into your daily diet:",
      cat: "Fitness",
    },
    {
      id: 21,
      heading: "Here's 8 Habits That Could Lengthen Your Life",
      image:
        "https://www.usnews.com/object/image/00000189-87e0-d056-a3ed-afe6cd2c0000/HD2662294138image.jpg?update-time=1690201620000&size=responsiveFlow300",
      description:
        "Be physically active.Don't smoke.Don't get addicted to opioids.Don't binge-drink on a regular basis.",
        largdesc:"Eat a healthy diet.Manage stress.Practice good sleep habits.Maintain positive social relationships.The study found that men with all those habits at age 40 could live an average of 24 years longer than men who have none of them. Women could gain an additional 21 years compared to their peers who have none of these habits.",
      cat: "Fitness",
    },
    {
      id: 22,
      heading:
        "Exercise and Cognitive Training Slow Thinking Declines. Vitamin D?",
      image:
        "https://www.usnews.com/object/image/00000189-7423-d678-a59f-77e70a870000/HD2662296944image.jpg?update-time=1689867000000&size=responsiveFlow300",
      description:
        "The study found that 20 weeks of aerobic and resistance exercise along with computerized cognitive training, which works to improve memory and attitude.",
         largdesc:"The study found that 20 weeks of aerobic and resistance exercise along with computerized cognitive training, which works to improve memory and attitude, showed significant improvement of cognition in patients with MCI.However, no significant effect of adding vitamin D to the exercise regime was found, the authors wrote.While exercise has been put forth for its potential protective effect on the brain and preventing dementia, cognitive stimulation added to an exercise regimen could boost cognition even in seniors already experiencing cognitive decline,Bherer said.",
      cat: "Fitness",
    },
    {
      id: 23,
      heading:
        "Tollywood actress calls Shilpa Shetty her fitness idol, dreams of achieving a toned and fit physique like the Bollywood diva",
      image:
        "https://static.toiimg.com/thumb/msid-100838708,imgsize-56202,width-400,resizemode-4/100838708.jpg",
      description:
        "“Failure is a stepping stone to success. Keep trying, push yourself, but never give up. Today, I took up the #StandUpChallenge!",
         largdesc:"Failure is a stepping stone to success. Keep trying, push yourself, but never give up. Today, I took up the #StandUpChallenge!It tests one's mobility, which is the ability to move your entire body freely and normally. It encompasses muscle strength, range of motion, and endurance capacity helping you with great mobility.",
      cat: "Fitness",
    },
    {
      id: 24,
      heading: "Bhagyashree shares simple exercise to relieve lower back pain",
      image: "https://images.indianexpress.com/2023/07/bhagyashree.jpg?w=640",
      description:
        "Lower back pain can range from a muscle aching to a shooting, burning or stabbing sensation.", 
        largdesc:"Lower back pain can range from a muscle aching to a shooting, burning or stabbing sensation. While it can be due to an underlying condition, the most common cause of lower back pain can be resolved with simple self-care treatments.Among these is the inclusion of exercise in your daily routine to improve your range of motion. Certain exercises can help relieve the ache and strengthen the muscles",
      cat: "Fitness",
    },
    {
      id: 25,
      heading:
        "Mira Kapoor does cycling on vacation to stay fit; here's how it helps",
      image:
        "https://images.indianexpress.com/2023/07/mira-kapoor_200_insta.jpg?w=640",
      description:
        "Mira Kapoor has been quite influential with her approach to health and fitness. As such, the mother-of-two is often on point when it comes to enjoying herself",
        largdesc:"Mira Kapoor has been quite influential with her approach to health and fitness. As such, the mother-of-two is often on point when it comes to enjoying herself while also ensuring she stays on track with her fitness routine even on vacation. Mira, who has been enjoying time off with husband Shahid Kapur in places like Switzerland, Greece, and Denmark, recently shared an Instagram Story on cycling in Copenhagen, the capital city of Denmark",
      cat: "Fitness",
    },
    {
      id: 26,
      heading: "Virat Kohli believes 'every day should be a leg day",
      image:
        "https://images.indianexpress.com/2023/07/virat-kohli-fitness_insta.jpg?w=640",
      description:
        "he can be seen performing a leg press as well as working on his calf muscles with the help of a coach. “Every day should be a leg day. 8 years and counting,” said Kohli,",
        largdesc:"he can be seen performing a leg press as well as working on his calf muscles with the help of a coach. “Every day should be a leg day. 8 years and counting,” said Kohli, referring to his eight-year-long journey of being consistent in the gym that has enabled him to stay on track with his health and fitness.",
      cat: "Fitness",
    },
    {
      id: 27,
      heading:
        "New mom Gauahar Khan squeezes in a 20-minute workout: know what to consider",
      image:
        "https://images.indianexpress.com/2023/07/gauahar-khan_2.jpg?w=640",
      description:
        "Gauahar Khan has been quite impressive with her commitment to getting back in shape post embracing motherhood in May this year. ",
        largdesc:"Gauahar Khan has been quite impressive with her commitment to getting back in shape post embracing motherhood in May this year.The actor who has been nursing her newborn baby boy has been consistently sharing snippets from her fitness journey. As such, the 39-year-old recently shared a mirror selfie from the gym after a quick 20-minute workout despite being fatigued",
      cat: "Fitness",
    },
    {
      id: 28,
      heading:
        "This monsoon, incorporate yoga into your routine for several health benefits",
      image:
        "https://images.indianexpress.com/2023/06/yoga_200_gettyy.jpg?w=640",
      description:
        "Monsoon is here and so are the host of illnesses linked to the rainy season. As we know, this season  the risk of common diseases, such as malaria, dengue, and chikungunya,",
        largdesc:"Monsoon is here and so are the host of illnesses linked to the rainy season. As we know, this season heightens the risk of common diseases, such as malaria, dengue, and chikungunya, in addition to the common cold, cough, fungal infections, diarrhoea, typhoid, etc. As such, one must prioritise their health at all times during the rainy season.",
      cat: "Fitness",
    },
    {
      id: 29,
      heading:
        "How these 3 yoga asanas can be easily done by children between five and 12",
      image: "https://images.indianexpress.com/2023/07/yoga-kids.jpg?w=640",
      description:
        "Do children need yoga? Yes and no. Children are natural yogis. During play hour, they naturally do most of the asanas which adults are at pain to do.",
        largdesc:"Do children need yoga? Yes and no. Children are natural yogis. During play hour, they naturally do most of the asanas which adults are at pain to do. Moreover, till the age of eight their pineal gland is active. It is a gland which keeps them happy. They live in the present and as yet don't know stress, anxiety, worry unless they are born into unfortunate situations.The whole scene changes drastically as they edge towards puberty. The pineal gland goes quiescent and the pituitary gland takes over and floods their body with hormones preparing them for sexual activity, child bearing, muscle and bone development, distribution of body fat and growth. All these also impact the mental and emotional state of the children stepping into the new world of adolescence in preparation for adulthood.",
      cat: "Fitness",
    },
    {
      id: 30,
      heading:
        "International Yoga Day 2023: Celebrations take place across India",
      image:
        "https://images.indianexpress.com/2023/06/arul-horizon-yoga-day-photo.jpeg?w=630",
      description:
        "The 9th International Day of Yoga was celebrated with enthusiasm across India on June 21.",
        largdesc: "The 9th International Day of Yoga was celebrated with enthusiasm across India on June 21.The word 'yoga' derived from Sanskrit means to join or to unite, symbolising the union of the body and consciousness.",
      cat: "Fitness",
    },
    {
      id: 31,
      heading:
        "How to train your body for hot weather if you are active or work outdoors",
      image:
        "https://images.theconversation.com/files/539663/original/file-20230726-17-ek3f5u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1",
      description:
        "There are several ways to help prevent a perilous rise in core temperature while being physically active in the heat.",
        largdesc: "There are several ways to help prevent a perilous rise in core temperature while being physically active in the heatThere are numerous pre-cooling strategies that can help. Most practical of those is consuming a cold drink (or better yet, an ice slurry or slushie) prior to exercise. But “training” your body to cope better in the heat is the best defence.",
      cat: "Fitness",
    },
    {
      id: 32,
      heading: "Seven techniques to avoid weight regain, approved by experts",
      image:
        "https://images.theconversation.com/files/539575/original/file-20230726-19-qvovln.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1",
      description:
        "Losing weight is challenging. But as anyone who has ever successfully lost weight knows, it's avoiding weight re-gain that's the real challenge.",
        largdesc:"Losing weight is challenging. But as anyone who has ever successfully lost weight knows, it's avoiding weight re-gain that's the real challenge.This is true no matter what method you follow to lose weight. For example, studies show that people who follow very low calorie diets (between 800-1,200 calories per day) regain between 26% and 121% of their lost weight five years after treatment. People who follow behavioural weight management programmes (such as WW, formerly Weight Watchers) regain between 30-35% of their lost weight after one year.",
      cat: "Fitness",
    },
    {
      id: 33,
      heading:
        "Viral Hack To Make Delicious Multi-Layered Wrap Gets 8.6 Million Views",
      image:
        "https://c.ndtvimg.com/2023-07/l1mrh9k_viral-wrap-hack_625x300_28_July_23.jpg",
      description:
        "There are some foods that always satisfy our mid-meal hunger pangs. Whether it is a yummy plate of momos or a spicy vegetable wrap.",
        largdesc: "There are some foods that always satisfy our mid-meal hunger pangs. Whether it is a yummy plate of momos or a spicy vegetable wrap, there are so many delicious options to choose from.Recently, we came across an interesting hack to make a yummy wrap with the fillings of your choice. Wondering what was so different about it? It featured an interesting trick that gave the wrap multiple layers and made it all the more delicious",
      cat: "Food",
    },
    {
      id: 34,
      heading:
        "Frozen meat and poultry products recalled over lack of federal inspection",
      image:
        "https://www.foodsafetynews.com/files/2023/07/Kingsland-Food-Processing-Corp.-recall-660x374.png",
      description:
        "Kingsland Food Processing Corp., of Maspeth, NY, is recallingof various frozen meat and poultry products .",
        largdesc: "Kingsland Food Processing Corp., of Maspeth, NY, is recalling an undetermined amount of various frozen meat and poultry products that were produced without the benefit of federal inspection,according to the U.S. Department of Agriculture's Food Safety and Inspection Service (FSIS).  The frozen meat and poultry products were produced on various dates ranging from Nov. 1, 2022, through July 20, 2023. FSIS is concerned that some product may be in consumers' refrigerators or freezers. ",
      cat: "Food",
    },
    {
      id: 35,
      heading: "Multi-country Salmonella outbreak linked to tomatoes.",
      image:
        "https://www.foodsafetynews.com/files/2023/07/dreamstime_small-tomatoes--660x374.jpg",
      description:
        "From August 2022 to mid-July 2023, 92 cases of Salmonella Senftenberg have been reported, 12 people have been hospitalized",
        largdesc: "From August 2022 to mid-July 2023, 92 cases of Salmonella Senftenberg have been reported, 12 people have been hospitalized, and one person died in Germany. Most patients are female, while 28 are male.Infections have occurred in all age groups.Germany is the most affected country, with 26 patients, followed by France with 16, Finland with 12, and Sweden with 11. The United States has recorded two patients.The first U.S. case is a 47-year-old female reported in October 2022. The second is an immunocompromised 42-year-old male with disease onset in April 2023. This person had a liver transplant in 2022.",
      cat: "Food",
    },
    {
      id: 36,
      heading:
        "Rising tomato prices: The latest weapon against Muslims in India",
      image:
        "https://www.aljazeera.com/wp-content/uploads/2023/07/AP23192503948195-1690346487.jpg?resize=770%2C513&quality=80",
      description:
        "Sarma then answered his own question with a straight-faced lie. ",
        largdesc: "Sarma then answered his own question with a straight-faced lie. “It is Miya sellers who are selling vegetables at higher rates,” he claimed,referring to Assam's Bengali-speaking Muslims, who have lived in the state for generations but are accused by Sarma's Bharatiya Janata Party and its Hindu right-wing ideological allies of being illegal Bangladeshi migrants.",
      cat: "Food",
    },
    {
      id: 37,
      heading: "Why McDonald's dropped tomatoes from Indian menus",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/17A57/production/_130355869_tomato.jpg.webp",
      description:
        "The price of the everyday staple has been climbing steeply for the past couple of weeks.",
        largdesc:"The price of the everyday staple has been climbing steeply for the past couple of weeks, and now stands at almost 200 rupees (£2; $3) a kilo in certain parts of India - a sharp shift from the usual 40-50 rupees.The costly tomato has wreaked havoc on wallets, in kitchens and even on the streets.McDonald's recently made news - not for adding a new dish - but dropping tomatoes from its menu in most of its outlets in northern and eastern India. It cited the unavailability of quality tomatoes due to seasonal crop issues as the reason.",
      cat: "Food",
    },
    {
      id: 38,
      heading:
        "Monsoon Magic: 6 One-Pot Indian Dishes to Savor the Rainy Season",
      image:
        "https://media.newstrack.in/uploads/lifestyle-health/food-recipe/Jul/27/big_thumb/cover-5_64c23db45d5fb.PNG",
      description:
        "Monsoon brings with it a delightful respite from the scorching heat, and what better way to enjoy the rainy season than with comforting and flavorful one-pot Indian dishes.",
        largdesc: "Monsoon brings with it a delightful respite from the scorching heat, and what better way to enjoy the rainy season than with comforting and flavorful one-pot Indian dishes.These dishes not only provide a burst of flavor but also save you from spending too much time in the kitchen. One-pot meals are not only convenient but also allow the ingredients to infuse their flavors, creating a symphony of taste in every bite. Let's explore six delicious one-pot Indian dishes that will make your monsoon even more enjoyable.",
      cat: "Food",
    },
    {
      id: 39,
      heading:
        "Jackie Shroff's Baingan Ka Bharta Recipe Is Doing The Rounds, You Should Try It Too",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-85-1-16897554553x2.png?impolicy=website&width=510&height=356",
      description:
        "Jackie Shroff for years has been captivating audiences not only with his on-screen performances but his recent culinary ventures have caught everyone's eyes too.",
        largdesc: "Jackie Shroff for years has been captivating audiences not only with his on-screen performances but his recent culinary ventures have caught everyone's eyes too.Known for his charismatic personality and love for food, Jackie has recently been sharing his cooking skills through viral recipe videos on social media.",
      cat: "Food",
    },
    {
      id: 40,
      heading: "15 Foods to Eat If You Have High Blood Pressure",
      image:
        "https://lovemyfamilymag.com/wp-content/uploads/2019/12/dennis-klein-130330-unsplash-1024x933-768x700.jpg",
      description:
        "High blood pressure is a common problem in today's societies, especially where people are living a fast life, eating fast food and are always on the go.",
         largdesc:"High blood pressure is a common problem in today's societies, especially where people are living a fast life, eating fast food and are always on the go.High blood pressure can be prevented with regular excercising and healthy eating, but if you already have a little bit higher level, it’s important to pay attention to your every day habits and keep your health from declining. We have gathered 15 foods which you should eat if you already have high blood pressure or you just want to do something for your own health.",
      cat: "Food",
    },
    {
      id: 41,
      heading: "Shilpa Shetty Enjoys Her Comfort Food In London.",
      image:
        "https://c.ndtvimg.com/2022-03/s5je6ho_shilpa-shetty_625x300_08_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      description:
        "Shilpa Shetty's food diaries are widely followed on social media. The actress generally sticks to a healthy workout schedule and a balanced diet to stay in shape.",
         largdesc:"Shilpa Shetty's food diaries are widely followed on social media. The actress generally sticks to a healthy workout schedule and a balanced diet to stay in shape.Sometimes, though, she breaks her diet restrictions and tries out delectable foods. And yesterday was that day for her. Shilpa is on vacation in London. And without indulging in some mouthwatering snacks, a trip to London is never complete. Guess, what? The actress resonates with us! Shilpa enjoyed a bowl of potato wedges and green salad alongside a delicious bun bread, which we could see. In the caption, she wrote, Comfort food #LondonDiaries.",
      cat: "Food",
    },
    {
      id: 42,
      heading:
        "'Spider-Verse,' 'Kraven the Hunter' Delayed as First Major Fall Amid Strikes",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Across-the-Spider-Verse-and-Kraven-The-Hunter-Split-Everett-H-2023.jpg?w=1296&h=730&crop=1&resize=681%2C383",
      description:
        "The studio also shifted its release plans for August racing pic Gran Turismo as it scrambles.",
         largdesc:"The studio also shifted its release plans for August racing pic Gran Turismo as it scrambles to figure out another way to market the movie without stars such as Orlando Bloom and David Harbour promoting it.It will now open wide on Aug. 25, with sneak previews on its original weekend date of Aug. 11, as well as on the weekend of Aug. 18. Further out, the studio relocated Aaron Taylor-Johnson's Kraven the Hunter from October. It also dated two big films for the first time: Bad Boys 4 (June 14, 2024) and Venom 3 (July 12, 2024).",
      cat: "Hollywood",
    },
    {
      id: 43,
      heading:
        "Parineeti Chopra and Raghav Chadha Wedding: Invite of various functions goes vira",
      image:
        "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/09/Parineeti-Chopra-and-Raghav-Chadha-Wedding-Invite-620.jpg",
      description:
        "Parineeti Chopra and Raghav Chadha have been in news ever since they got engaged earlier this year in Delhi",
         largdesc:"Parineeti Chopra and Raghav Chadha have been in news ever since they got engaged earlier this year in Delhi. The couple were expected to tie the knot once Parineeti completes her work commitments and now, we hear that the actress has wrapped up major schedules of her upcoming ventures. As per current reports, the couple will be tying the knot on September 24 in a lavish traditional ceremony in Udaipur, Rajasthan.",
      cat: "Hollywood",
    },
    {
      id: 44,
      heading:
        "'Barbie' movie's ending is an important reminder for women's health",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/230724143149-02-barbie-movie-still.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp",
      description:
        "After all of Barbie's glories and misadventures on the path to becoming human, moviegoers leave her at a pivotal moment at the close of the new film.",
        largdesc:"After all of Barbie's glories and misadventures on the path to becoming human, moviegoers leave her at a pivotal moment at the close of the new film.That moment isn't starting an extraordinary astronaut job or winning a Nobel Prize or even realizing authentic human beauty: It's a gynecologist appointment.In the film, the character Ruth Handler (who in real life invented the doll) explains that “Barbie” doesn't have an ending. Instead, the movie closes with Barbie beginning the full human experience.",
      cat: "Hollywood",
    },
    {
      id: 45,
      heading:
        "Barbie box office collection Day 6: Margot Robbie's film struggles amid backlash from Indian audience, earns Rs 25.5 crore",
      image:
        "https://images.indianexpress.com/2023/07/barbie-box-office-day-6.jpg?w=640",
      description:
        "Greta Gerwig's Barbie may be garnering appreciation internationally, but the comedy is finding it difficult to sustain momentum in India.",
         largdesc:"Greta Gerwig's Barbie may be garnering appreciation internationally, but the comedy is finding it difficult to sustain momentum in India.Starring Margot Robbie and Ryan Gosling, the film earned only a little over Rs 2 crore on Wednesday, bringing its six-collection to Rs 25.5 crore, as reported by industry tracker Sacnilk.",
      cat: "Hollywood",
    },
    {
      id: 46,
      heading:
        "The Monkey King: Release Date, Trailer, and Everything We Know So Far",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/07/27/550x309/MonkeyThe_Monkey_King_u_00_19_24_02_1690475473247_1690475539226.jpg",
      description:
        "This movie is inspired by a Chinese character from Journey to the West, a famous 16th-century Chinese novel.",
        largdesc: "This movie is inspired by a Chinese character from Journey to the West, a famous 16th-century Chinese novel.The Monkey King possesses extraordinary supernatural powers, but his biggest challenge is his own inflated ego.",
      cat: "Hollywood",
    },
    {
      id: 47,
      heading:
        "Matt Damon reveals he refused lead role in Avatar and 10% of film's profits. That ended up being $250 million!",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/07/26/550x309/avatar_damon_1690371679222_1690371687718.jpg",
      description:
        "Matt Damon has revealed that he “turned down the most money an actor has ever been offered” when he said no to Sam Worthington's role in James Cameron's 2009 blockbuster fantasy epic Avatar.",
        largdesc: "Matt Damon has revealed that he “turned down the most money an actor has ever been offered” when he said no to Sam Worthington's role in James Cameron's 2009 blockbuster fantasy epic Avatar.While he didn't confirm the amount, the reported remuneration as per the CNN report is around $250 million. (Also Read: Oppenheimer actor Matt Damon promised wife he'd go on a break, unless Christopher Nolan called him and offered a film)",
      cat: "Hollywood",
    },
    {
      id: 48,
      heading:
        "Heartstopper Season 2: Trailer, Release Date, Plot and Everything You Need to Know",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/07/26/550x309/IMG_2297_1690369241711_1690369255831.webp",
      description:
        "Netflix's show Heartstopper is receiving a lot of love from viewers and critics. ",
        largdesc:"Netflix's show Heartstopper is receiving a lot of love from viewers and critics.People are praising it for its positive portrayal of young queer characters. The show is a huge success for Netflix and has a dedicated fanbase. Many fans have shared on social media how the series has affected their lives, with some even feeling encouraged to come out after watching it",
      cat: "Hollywood",
    },
    {
      id: 49,
      heading: "Runners Headed to Hollywood for LA Marathon",
      image:
        "https://patch.com/img/cdn20/users/26494162/20230307/074929/styles/patch_image/public/dscn4449___07194251416.jpg?width=1200",
      description:
        "Runners will participate in a full marathon and charity half marathon on Sunday, and a 5K race and kids race on Saturday. The 5K will take place in Elysian Park, ending with a view of Dodger Stadium",
      cat: "Hollywood",
    },
    {
      id: 50,
      heading:
        "Kobe Bryant's Size-14 Footprints Unveiled At The Chinese Theatre",
      image:
        "https://patch.com/img/cdn20/ap/26494162/20230315/044240/styles/patch_image/public/ap23074627044394___15164050471.jpg?width=1200",
      description:
        "The late Lakers star's prints are among a select group that will be permanently displayed outside the Hollywood Boulevard landmark -others rotate in and out due to space constraints,",
        largdesc:"The late Lakers star's prints are among a select group that will be permanently displayed outside the Hollywood Boulevard landmark -others rotate in and out due to space constraints, KTLA reported.",
      cat: "Hollywood",
    },
    {
      id: 51,
      heading:
        "Robert Downey Jr and the Avengers Assemble Against Donald Trump",
      image:
        "https://i.ndtvimg.com/i/2016-09/save-the-day_640x480_41474533058.jpg",
      description:
        " Some of America's biggest stars - including actors Robert Downey Jr and Scarlett Johansson - appear in a short video unveiled on Wednesday, taking pot-shots at Donald Trump",
        largdesc: "Some of America's biggest stars - including actors Robert Downey Jr and Scarlett Johansson - appear in a short video unveiled on Wednesday, taking pot-shots at Donald Trumpwhile rallying voters to the polls on Election Day in the United States.",
      cat: "Hollywood",
    },
    {
      id: 52,
      heading:
        "Nicolas Cage on Brief Surprise 'The Flash''Cameo: “Glad I Didn't Blink”",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Nicolas-Cage-getty-1477633208-H-2023.jpg?w=1296&h=730&crop=1&resize=681%2C383",
      description:
        "During an interview with USA Today, published online Thursday, the Oscar-winning actor said it was fulfilling to finally see the character come to life decades after the 1998 film.",
        largdesc: "During an interview with USA Today, published online Thursday, the Oscar-winning actor said it was fulfilling to finally see the character come to life decades after the 1998 film Superman Lives was scrapped“WellI was glad I didn't blink,” he quipped. “For me, it was the feeling of being actualized. Even that look for that particular character, finally seeing it on screen, was satisfying. But as I said, it’s quick",
      cat: "Hollywood",
    },
    {
      id: 53,
      heading:
        "The Famous $12.99 Disney Bundle Deal Is Back: Here's What to Know About the Offer",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/best-disney-bundle-deal-price.jpeg?w=2000&h=1126&crop=1&resize=681%2C383",
      description:
        "With the proliferation of streaming services out there these days, it can be hard to decide what to watch — and where to spend your money.",
         largdesc:"With the proliferation of streaming services out there these days, it can be hard to decide what to watch — and where to spend your money.But one of the best streaming deals on the market remains the so-called “Disney Bundle” (or “Disney Plus Bundle”) which gets you unlimited streaming on Disney+, Hulu and ESPN+ for just $12.99 total. That’s all three services for less than $13.",
      cat: "Hollywood",
    },
    {
      id: 54,
      heading: "The Cast of 'The Parent Trap' Remake, Then and Now",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/MSDPATR_EC005-H-2023.jpg?w=1296&h=730&crop=1&resize=681%2C383",
      description:
        "Twenty-five years ago, Lindsay Lohan made her film debut in the remake of The Parent Trap, playing identical twins Annie and Hallie.",
         largdesc:"Twenty-five years ago, Lindsay Lohan made her film debut in the remake of The Parent Trap, playing identical twins Annie and Hallie.The twins, separated at birth and each raised by one of their biological parents,later discover each other for the first time at summer camp. The pair elaborately and successfully scheme to reunite their parents and rekindle their romance after they secretly switch places.",
      cat: "Hollywood",
    },
    {
      id: 55,
      heading:
        "'Haunted Mansion': How VFX Brought Classic Ghosts to the Big Screen",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/haunted_mansion_dtlr4_4k_r709f_still_230717.087833-H-2023.jpg?w=1296&h=730&crop=1&resize=681%2C383",
      description:
        "In creating Disney's new movie Haunted Mansion, members of the visual effects team took walks through the iconic Haunted Mansion ride for inspiration.",
         largdesc:"In creating Disney's new movie Haunted Mansion, members of the visual effects team took walks through the iconic Haunted Mansion ride for inspiration.In the ride, which first opened in 1969 at Disneyland, guests walk through the gate and into the Mansion before being guided into “Doom Buggies” in which they ride through the haunted house and meet many ghosts along the way.",
      cat: "Hollywood",
    },
    {
      id: 56,
      heading:
        "After 'Pathaan', Siddharth Anand signs a film to direct for 'Mulk' producer at an unheard price! ",
      image:
        "https://static.toiimg.com/thumb/imgsize-28754,msid-97294925,width-400,resizemode-4/97294925.jpg",
      description:
        "The day everyone was waiting for has finally arrived. Siddharth Anand's 'Pathaan' released on January 25 in more than 100 countries in Hindi, Tamil and Telugu.",
         largdesc:"The day everyone was waiting for has finally arrived. Siddharth Anand's 'Pathaan' released on January 25 in more than 100 countries in Hindi, Tamil and Telugu.The Shah Rukh Khan, Deepika Padukone and John Abraham starrer has already broken all records of advance booking at the box office and set new trends on its opening day too. The film earned approximately Rs 54 crore nett on its opening day at the domestic box office, beating Hrithik Roshan's 'War', which had earned Rs 50 crore. 'Pathaan' went on to rake in Rs 100 crore nett at the worldwide box office on day 1. With these euphoric numbers, the film has revived the magic of theatres as many single screens which had shut during the pandemic due to losses, re-opened with 'Pathaan'. The film also stars Deepika Padukone and John Abraham in lead roles. The film also sees Salman Khan in a special cameo. Follow ETimes live blog for reviews, twitter reactions and other entertaining updates regarding the film",
      cat: "Bollywood",
    },
    {
      id: 57,
      heading:
        "Comic Creators Hit the Picket Line: “It's a Love That Gets Exploited",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/IMG_4304-H-2023.jpg?w=1296&h=730&crop=1&resize=681%2C383",
      description:
        "With great corporate power should come great responsibility. And with that ethos in mind, comic book creators joined Writers Guild of America",
         largdesc:"With great corporate power should come great responsibility. And with that ethos in mind, comic book creators joined Writers Guild of Americamembers on the picket line Thursday, protesting what they called the exploitation of the most vulnerable.",
      cat: "Hollywood",
    },
    {
      id: 58,
      heading:
        "Mark Ronson Says Lady Gaga's “Joanne” for 'A Star Is Born'",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Mark-Ronson-a-star-is-born-getty-everett-H-2023.jpg?w=1296&h=730&crop=1&resize=681%2C383",
      description:
        "We were working on Gaga's album Joanne and Bradley Cooper stopped by the studio one afternoon. I like his films.",
         largdesc:"Mark Ronson Says He Wouldn't Let Bradley Cooper Use Lady Gaga's “Joanne” for 'A Star Is Born' We were working on Gaga's album Joanne and Bradley Cooper stopped by the studio one afternoon. I like his films.He showed up looking like a movie star. So we hung out,” Ronson recalled. “He was really sweet, talking about this new script that they were both doing. I played him the song called ‘Joanne’ and he’s like, ‘That’s great, can I have it?’",
      cat: "Hollywood",
    },
    {
      id: 59,
      heading: "WhatsApp testing new 'safety tools' to help users stay secure",
      image:
        "https://images.indianexpress.com/2023/07/WhatsApp-Unsplash.jpg?w=640",
      description:
        "WhatsApp has introduced several new features to combat spam and protect users from scammers.",
         largdesc:"WhatsApp has introduced several new features to combat spam and protect users from scammers like the ability to silence incoming calls from unknown numbers.Now, a recent report from WABetaInfo suggests the developers are testing new ‘safety tools’ which will help users stay secure when they receive messages from unknown numbers.",
      cat: "Technology",
    },
    {
      id: 60,
      heading: "Instagram head says 'Threads'to get DM support soon",
      image:
        "https://images.indianexpress.com/2023/07/instagram-threads-1.jpg?w=640",
      description:
        "As Meta continues to add more features to its latest microblogging platform Threads, Adam Mosseri.",
         largdesc:"As Meta continues to add more features to its latest microblogging platform Threads, Adam Mosseri, the head of Instagram has now confirmed to The Washington Postthat the platform will soon gain direct messages (DMs) option, enabling users to chat with friends and followers.",
      cat: "Technology",
    },
    {
      id: 61,
      heading: "Aided by AI language models, Google's robots are getting smart",
      image: "https://images.indianexpress.com/2023/07/google-robots.jpg?w=640",
      description:
        "Until very recently, this demonstration, which I witnessed during a podcast interview at Google's robotics division in Mountain View, California, last week, would have been impossible.",
         largdesc:"Until very recently, this demonstration, which I witnessed during a podcast interview at Google's robotics division in Mountain View, California, last week, would have been impossible.Robots weren't able to reliably manipulate objects they had never seen before, and they certainly weren't capable of making the logical leap from “extinct animal” to “plastic dinosaur.”",
      cat: "Technology",
    },
    {
      id: 62,
      heading: "X monthly users reaches new high in 2023, says Elon Musk",
      image: "https://images.indianexpress.com/2023/07/x-elon-musk.jpg?w=640",
      description:
        "Elon Musk, CEO of Tesla, has said that after certain organisational changes, the number of monthly users of social media site X, formerly known as Twitter, had hit a “new high.”",
         largdesc:"Elon Musk, CEO of Tesla, has said that after certain organisational changes, the number of monthly users of social media site X, formerly known as Twitter, had hit a new high.Musk asserted the same by posting a graph of user statistics that indicated the most recent count to be above 540 million.",
      cat: "Technology",
    },
    {
      id: 63,
      heading:
        "ISRO successfully places seven Singaporean satellites into intended orbit",
      image:
        "https://images.indianexpress.com/2023/07/F2QIexIbYAAlpzd.jpg?w=640",
      description:
        "On the successful launch and separation of the satellites, ISRO posted on Twitter, “PSLV-C56/DS-SAR Mission: The mission is successfully accomplished.",
         largdesc:"On the successful launch and separation of the satellites, ISRO posted on Twitter, “PSLV-C56/DS-SAR Mission: The mission is successfully accomplished.PSLV-C56 vehicle launched all seven satellites precisely into their intended orbits. Thanks to @NSIL_India and Singapore, for the contract.” This ISRO mission, which comes after the much-awaited Chandrayaan-3 launch earlier this month, is being undertaken by its commercial arm NewSpace India Limited.",
      cat: "Technology",
    },
    {
      id: 64,
      heading:
        "LinkedIn likely working on AI 'coach' to teach people how to apply for jobs",
      image: "https://images.indianexpress.com/2023/07/Linkedin-1.jpg?w=640",
      description:
        "LinkedIn is working on a new AI tool that could make job hunting easier and more efficient, according to a new leak.",
         largdesc:"LinkedIn is working on a new AI tool that could make job hunting easier and more efficient, according to a new leak.The tool, called LinkedIn Coach, is a chatbot that can assist users with various aspects of their career development, such as applying for jobs, learning new skills, and networking with others",
      cat: "Technology",
    },
    {
      id: 65,
      heading: "Sony slashes PlayStation 5 price in India by Rs 7,500",
      image: "https://images.indianexpress.com/2023/07/PS5-FB-1.jpg?w=640",
      description:
        "Sony has announced a limited-time offer for its PlayStation 5 console in India and some other countries, where the price of the standard edition has been reduced by a significant margin.",
         largdesc:"Sony has announced a limited-time offer for its PlayStation 5 console in India and some other countries, where the price of the standard edition has been reduced by a significant margin.The PS5, which normally costs Rs 49,990 in India, is now available for Rs 42,490 at participating retailers until August 10th. This is a discount of Rs 7,500, or around 16 per cent.",
      cat: "Technology",
    },
    {
      id: 66,
      heading:
        "Almost 40% of the world is on Facebook now, but growth has slowed in home market",
      image:
        "https://images.indianexpress.com/2023/07/meta-llama2-microsoft-1.jpg?w=640",
      description:
        "In its second-quarter result announcement on Thursday, Meta revealed that Facebook reached over 3 billion monthly active users as of June 30",
         largdesc:"In its second-quarter result announcement on Thursday, Meta revealed that Facebook reached over 3 billion monthly active users as of June 30- or almost 40% of the world population. That's a 6% increase from a year ago",
      cat: "Technology",
    },
    {
      id: 67,
      heading:
        "Google, Microsoft, Anthropic & OpenAI collaborate for responsible use of AI",
      image:
        "https://images.indianexpress.com/2023/07/AI-Safety-Body.jpg?w=640",
      description:
        "Along with the proliferation of Artificial Intelligence, the one thing that has consistently raised concerns is the responsible use of the technology that has been making strides worldwide.",
         largdesc:"Along with the proliferation of Artificial Intelligence, the one thing that has consistently raised concerns is the responsible use of the technology that has been making strides worldwide.While several nations are in the process of laying a framework to govern the responsible use of AI, big tech companies are working towards a collective to foster responsible implementation of AI",
      cat: "Technology",
    },
    {
      id: 68,
      heading: "Rajiv Makhni Quit NDTV After 20 Years of Stint",
      image:
        "https://i0.wp.com/agencymasala.com/wp-content/uploads/2023/05/ndtv-01-scaled.jpg?resize=696%2C364&ssl=1",
      description:
        "Technology journalist Rajiv Makhni quit NDTV after a 20-year-long stint with the news channel. Confirming the news, Makhni said, “I am evaluating three offers.",
         largdesc:"Technology journalist Rajiv Makhni quit NDTV after a 20-year-long stint with the news channel. Confirming the news, Makhni said, “I am evaluating three offers.Will be announcing which one I am accepting within a few days.",
      cat: "Technology",
    },
    {
      id: 69,
      heading:
        "NASA unveils streaming service NASA+; beta site up, app update coming soon",
      image:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/nasa-app-ios-sixteen_nine.png?size=948:533",
      description:
        "NASA (National Aeronautics and Space Administration) is embarking on an exciting journey of technological advancements to improve the overall user experience and accessibility of its online platforms.",
        largdesc: "NASA (National Aeronautics and Space Administration) is embarking on an exciting journey of technological advancements to improve the overall user experience and accessibility of its online platforms.As part of this initiative, NASA is revamping its main websites to offer a seamless and enriching browsing experience to its viewers",
      cat: "Technology",
    },
    {
      id: 70,
      heading: "Google's new AI model can teach robots how to move",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/google-292608-16x9.png?VersionId=OzMKYP.L3hvhb1vF6ijRL0YWRP8UbFWj&size=690:388",
      description:
        "Google DeepMind has unveiled an AI model called Robotics Transformer 2, or RT-2, which can help robots more easily understand and perform actions",
        largdesc: "Google DeepMind has unveiled an AI model called Robotics Transformer 2, or RT-2, which can help robots more easily understand and perform actionsin both familiar and new situations. The model is trained on text and images from the web. For example, RT-2 is capable of identifying trash and knows how to dispose it even without explicit training, Google said.",
      cat: "Technology",
    },
    {
      id: 71,
      heading:
        "AirTag hidden in safe tracks US man who stole items worth ₹16 lakh",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/Apple_AirTag.jpg",
      description:
        "Police stuffed Apple's tracking device AirTag inside a teddy bear and kept it inside a safe to catch a serial thief in US.",
         largdesc:"Police stuffed Apple's tracking device AirTag inside a teddy bear and kept it inside a safe to catch a serial thief in US. The bluetooth tracker pinged the safe's location at the thief's home, 30 minutes after he stole the decoy safe from a restaurant.The 52-year-old allegedly stole items worth between ₹12 lakh and ₹16 lakh from four restaurants.",
      cat: "Technology",
    },
    {
      id: 72,
      heading: "Apple tightens App Store's API rules to protect user privacy",
      image:
        "https://imgeng.jagran.com/images/2023/jul/apple-apps-api-requirement1690620529622.jpg",
      description:
        "Apple has tightened its App Store's API (application programming interface) rules to prevent app developers from misusing some APIs to collect data about users' devices through fingerprinting.",
         largdesc:"Apple has tightened its App Store's API (application programming interface) rules to prevent app developers from misusing some APIs to collect data about users' devices through fingerprinting.The company will soon start requiring developers to provide reasons for using these APIs. Starting in fall 2023, a notice will be issued if an approved reason isn't provided, Apple said.",
      cat: "Technology",
    },
    {
      id: 73,
      heading: "Kolkata-based defence PSU launches autonomous vessel Neerakshi",
      image:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/07_jul/29_sat/img_1690646830257_359.jpg",
      description:
        "Garden Reach Shipbuilders and Engineers (GRSE), a Kolkata-based PSU of the Ministry of Defence, has launched an autonomous underwater vehicle (AUV) named Neerakshi.",
         largdesc:"Garden Reach Shipbuilders and Engineers (GRSE), a Kolkata-based PSU of the Ministry of Defence, has launched an autonomous underwater vehicle (AUV) named Neerakshi.The 2.15-metre-long vessel is capable of operating up to a depth of 300 metres, GRSE said. DRDO Chairman Samir V Kamat lauded GRSE's efforts towards the innovation aligned with the Atmanirbhar policy.",
      cat: "Technology",
    },
    {
      id: 74,
      heading:
        "Backup Uber driver in fatal US autonomous car crash pleads guilty",
      image:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-1564377528-64c415b6a029b.jpg?crop=1.00xw:0.846xh;0,0&resize=1200:*",
      description:
        "A backup Uber driver involved in a car crash that killed a woman in the US has pleaded guilty.",
         largdesc:"A backup Uber driver involved in a car crash that killed a woman in the US has pleaded guilty.Rafaela Vasquez was behind the wheel of a self-driving Uber test vehicle when it struck Elaine Herzberg who was walking her bicycle across a street at night in 2018. As per police, Vasquez was streaming a TV show during the crash",
      cat: "Technology",
    },
    {
      id: 75,
      heading: "Your kids will love this fast-food recipe with a healthy, gourmet twist",
      image: "https://images.indianexpress.com/2023/05/Amrita-Raichand2.jpg?w=640",
      description: "Burgers have been a go-to snack for most kids for a long time. However, if your kid is long bored of it, and you are too, you can try this new recipe!",
       largdesc:"Burgers have been a go-to snack for most kids for a long time. However, if your kid is long bored of it, and you are too, you can try this new recipe!Chef Amrita Raichand brings to you mini veg burgers which are not only healthy, but also have a special gourmet touch to it. Wondering how you can make such a simple snack gourmet as well as nutritious? Fret not, here is all you need to know. ",
      cat: "Food",
    },
    {
      id: 76,
      heading: "Slurp this delish bowl of Malaika Arora,s chicken ,soup for the soul'",
      image: "https://images.indianexpress.com/2022/08/IMG-8841.jpg?w=640",
      description: "On days when we feel under the weather or just crave a light, wholesome meal, soups.",
      largdesc:"On days when we feel under the weather or just crave a light, wholesome meal, soups come to the rescue; especially during seasons when our body is either exposed to viruses or just craves that sense of warmth while enjoying the showers with a hot, healthy meal.Fitness enthusiast Malaika Arora expressed the same view as she took to Instagram to share her bowl of delish chicken soup, calling it “soup for the soul”.",
      cat: "Food",
    },
    {
      id: 77,
      heading: "Australian Chef Gary Mehigan shares his love for Madurai,s bun parotta",
      image: "https://images.indianexpress.com/2023/08/gary-mehigan-1200.jpg?w=640",
      description: "A delectable South Indian street food, bun parotta is loved by many for its delightful fusion of flaky parotta and soft bun.",
       largdesc:"It is usually served with a spicy curry or flavourful chutney and offers a unique blend of textures and flavours that will leave you wanting more. This scrumptious delicacy has now also found a fan in Australian Chef Gary Mehigan, who took to social media to share a video of Madurai street vendors skillfully preparing bun parottaCalling the duo’s method of preparing the dish “dream skills”, he wrote, “I may have posted this before but every time I watch it…wow! This was in Madurai in Tamil Nadu at a shop making and selling bun parotta.”“You tease this super light and crisp bread apart and dip it into a number of different spicy gravies. My goodness it’s delicious…and I want one now!” the chef added.",
      cat: "Food",
    },
    {
      id: 78,
      heading: "World Food Safety Day 2023: Why is this global event observed?",
      image: "https://images.indianexpress.com/2023/06/Intro-1.jpg?w=630",
      description: "As they say, health is wealth and you can only talk of the latter once you keep in check the former.",
       largdesc:"As they say, health is wealth and you can only talk of the latter once you keep in check the former.A monumental part of taking care of your health is eating properly cleaned and healthy food. In honour of building better food safety standards, we celebrate World Food Safety Day.Observed on June 7 every year, World Food Safety Day aims to encourage conversation and inspire action to deter and detect foodborne diseases",
      cat: "Food",
    },
    {
      id: 79,
      heading: "Top 6: Food items to keep you fuller, fit",
      image: "https://images.indianexpress.com/2014/07/lady-apple-wellness1.jpg?w=630",
      description: "Soup,Oatmeal,Apples,Eggs,Dark chocolate,Avocados",
      cat: "Food",
    },
    {
      id: 80,
      heading: "The real cost of your chocolate habit",
      image: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1-650x428.jpg",
      description: "Chocolate sales have boomed in recent months. As the cost-of-living crisis bites, consumers are increasingly reaching for chocolate as a simple.",
       largdesc:"The real cost of your chocolate habit:new research reveals the bittersweet truth of cocoa farming in Africa's forestsChocolate sales have boomed in recent months. As the cost-of-living crisis bites, consumers are increasingly reaching for chocolate as a simple and affordable pleasure.The most important ingredient in chocolate is cocoa beans, which come from plants grown in the tropics.About 70% of the world,s cocoa comes from West Africa. The countries of Côte d,Ivoire (Ivory Coast) and Ghana are two of the biggest producers.Meeting the world’s insatiable appetite for chocolate has wrought a huge environmental cost, as the incredibly rich and diverse rainforests of West Africa are razed to make way for cocoa farms.",
      cat: "Food",
    },
  ]);
  return (
    <>
      <storeData.Provider value={[data, setData]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
             <Route path="*" element={<Error/>}/>
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/dynamiccomp" element={<DynamicComp/>}/>
          </Routes>
        </BrowserRouter>
      </storeData.Provider>
    </>
  );
};

export default Latest;