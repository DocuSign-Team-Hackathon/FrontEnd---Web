import cocoImg from '../../assets/coco.png';
import oreaImg from '../../assets/oreo.png';
import rossImg from '../../assets/ross.png';
import maxImg from '../../assets/max.png';
import yoshiImg from '../../assets/yoshi.png';
import bellaImg from '../../assets/bella.png';

const Dogs = [
    { id:1,
      name: 'Coco',
      age: 'Adult',
      type: 'Husky',
      size: 'Large',
      gender: 'Female',
      picture: {cocoImg},
      color:'white',
      kids: 'Ok w/ Kids over age 16',
      cats: 'No cats',
      dog:'OK w/ introduction'
    },
    { id:2,
      name: 'Yoshi',
      age: 'Senior',
      gender:'Female',
      type: 'Terrier',
      size: 'Medium',
      picture: {yoshiImg},
      color: null,
      kids: null,
      cats: null,
      dog: null,
    },
    { id:3,
      name: 'Max',
      age: 'Adult',
      gender:'Male',
      type: 'German Shepherd',
      size: 'Large',
      picture: {maxImg},
      color: null,
      kids: null,
      cats: null,
      dog: null
    },
    {  id:4,
        name: 'Oreo',
        age: 'Adult',
        gender:'Female',
        type: 'Pit Bull Terrier',
        size: 'Large',
        picture: {oreaImg},
        color: null,
        kids: null,
        cats: null,
        dog: null

    },
    {   id:5,
        name: 'Bella',
        age: 'Young',
        gender:'Female',
        type: 'Pit Bull Terrier',
        size: 'Large',
        picture: {bellaImg},
        color: null,
        kids: null,
        cats: null,
        dog: null
    },
    {   id:6,
        name: 'Ross',
        age: 'Adult',
        gender:'Male',
        type: 'German Shepherd',
        size: 'Large',
        picture: {rossImg},
        color: null,
      kids: null,
      cats: null,
      dog: null
      
    }
  ];
  
  export default Dogs;