import { useEffect, useState } from 'react';
import { getHeading } from '../api/headingApi';
import HeadingDisplay from '../components/HeadingDisplay';

const LandingPage = () => {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    getHeading().then((res) => setHeading(res.data.content)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen p-10 text-center bg-white">
      <HeadingDisplay text={heading || 'Loading...'} />
      <p className="mt-6 text-gray-600">
        Unlock actionable intelligence with AI-driven tools.
      </p>
    </div>
  );
};

export default LandingPage;
