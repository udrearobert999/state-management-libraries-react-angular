import CheckMark from '@/components/checkmark';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const SuccessPage = () => {
  let navigate = useNavigate();
  let progress = useMotionValue(90);

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-20">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        style={{ x: progress }}
        transition={{ duration: 1 }}
      />
      <CheckMark progress={progress} />
      <p>You will be redirected...</p>
      <p>
        If not,{' '}
        <NavLink to="/" className="text-blue-500 hover:text-blue-700">
          click here
        </NavLink>
        .
      </p>
    </div>
  );
};

export default SuccessPage;
