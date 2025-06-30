import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavbarToggle({ isOpen, onToggle }: NavbarToggleProps) {
  return (
    <button
      type="button"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={onToggle}
      className="sm:hidden z-[9999] text-3xl aspect-square cursor-pointer"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
}
