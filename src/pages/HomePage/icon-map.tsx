import {
  FiUserCheck,
  FiClock,
  FiHeart,
  FiTarget,
  FiEye,
  FiAward,
  FiFileText,
  FiUsers,
  FiBriefcase,
  FiCompass,
  FiShield,
  FiMessageCircle,
} from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';
import { IconType } from '../../types';

const ICONS: Record<string, IconType> = {
  'user-check': FiUserCheck,
  clock: FiClock,
  heart: FiHeart,
  target: FiTarget,
  eye: FiEye,
  award: FiAward,
  file: FiFileText,
  users: FiUsers,
  briefcase: FiBriefcase,
  compass: FiCompass,
  shield: FiShield,
  calculator: FaCalculator,
  message: FiMessageCircle,
};

export const getIconByName = (name: string): IconType =>
  ICONS[name] || FiUserCheck;
