import { Feather, PiggyBank, Bird, HelpCircle, AlertCircle } from 'lucide-react';

export function getAnimalIcon(type: string) {
  switch (type.toLowerCase()) {
    case 'cattle':
      return Feather; // Feather icon as an alternative for cows
    case 'sheep':
      return Bird; // Bird icon as an alternative for sheep
    case 'goat':
      return AlertCircle; // AlertCircle icon as an alternative for goats
    case 'pig':
      return PiggyBank; // PiggyBank icon for pigs
    default:
      return HelpCircle; // Help icon for unknown animals
  }
}
