import React from 'react';
import { BsEmojiLaughing } from 'react-icons/bs';
import { HiOutlineEmojiSad } from 'react-icons/hi';

export const reviewData = [
    { 
      numOfRate: '5.0',
      totalNumPeople : 260,
      typeOfReview: 'positive reviews',
      reactIcon: <BsEmojiLaughing/>
    },
    { 
      numOfRate: '2.0',
      totalNumPeople : 108,
      typeOfReview: 'negative reviews',
      reactIcon: <HiOutlineEmojiSad/>
    }
  ]