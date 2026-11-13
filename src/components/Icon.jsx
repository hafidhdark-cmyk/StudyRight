import React from 'react';
import {
  GraduationCap,
  MoonStar,
  Briefcase,
  Truck,
  FileCheck2,
  Building2,
  Compass,
  CalendarCheck,
  Coins,
  Wallet,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  HelpCircle,
} from 'lucide-react';

const icons = {
  GraduationCap,
  MoonStar,
  Briefcase,
  Truck,
  FileCheck2,
  Building2,
  Compass,
  CalendarCheck,
  Coins,
  Wallet,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  HelpCircle,
};

export default function Icon({ name, className = 'w-5 h-5', ...props }) {
  const Component = icons[name] || Sparkles;
  return <Component className={className} {...props} />;
}
