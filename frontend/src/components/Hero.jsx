import React, { useState } from 'react';
import { assets, bodyTypeList, eventTypeList, faceShapeList, heightList, skinToneList } from '../assets/assets';

const Hero = () => {
  const [bodyType, setBodyType] = useState(''); 
  const [skinTone, setSkinTone] = useState('');
  const [height, setHeight] = useState('');
  const [eventType, seteventType] = useState('');
  const [faceShape, setfaceShape] = useState('');

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold'>Astrella, your guide to becoming a Cinderella</h1>
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
        
        <div className="flex flex-col items-start gap-2">
          <select required value={bodyType} onChange={(e) => setBodyType(e.target.value)} className="p-2 border rounded">
            <option value="">Body Type</option>{bodyTypeList.map((body) => (
              <option key={body} value={body}>{body}
              </option>))}
          </select>
          <p className='px-1 text-sm text-gray-500'>
            {bodyType ? bodyType : '(Select Body Type)'}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
           <select required value={skinTone} onChange={(e) => setSkinTone(e.target.value)} className="p-2 border rounded">
            <option value="">Skin tone</option>{skinToneList.map((skin) => (
              <option key={skin} value={skin}>{skin}
              </option>))}
          </select>
          <p className='px-1 text-sm text-gray-500'>
            {skinTone ? skinTone : '(Select Skin tone)'}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
           <select required value={height} onChange={(e) => setHeight(e.target.value)} className="p-2 border rounded">
            <option value="">Height</option>{heightList.map((height) => (
              <option key={height} value={height}>{height}
              </option>))}
          </select>
          <p className='px-1 text-sm text-gray-500'>
            {height ? height : '(Select heigth)'}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
           <select required value={eventType} onChange={(e) => seteventType(e.target.value)} className="p-2 border rounded">
            <option value="">Event Type</option>{eventTypeList.map((event) => (
              <option key={event} value={event}>{event}
              </option>))}
          </select>
          <p className='px-1 text-sm text-gray-500'>
            {eventType ? eventType: '(Select Event Type)'}</p>
        </div><div className="flex flex-col items-start gap-2">
           <select required value={faceShape} onChange={(e) => setfaceShape(e.target.value)} className="p-2 border rounded">
            <option value="">Face Shape</option>{faceShapeList.map((face) => (
              <option key={face} value={face}>{face}
              </option>))}
          </select>
          <p className='px-1 text-sm text-gray-500'>
            {faceShape ? faceShape : '(Select Face shape)'}</p>
        </div>

      </form>

      <img src={assets.main_ai} alt="ai" className='max-h-74' />
    </div>
  );
}

export default Hero;
