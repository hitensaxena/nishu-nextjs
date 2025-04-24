interface ToggleButtonProps {
  isFreelancer: boolean;
  onToggle: (value: boolean) => void;
}

export const ToggleButton = ({ isFreelancer, onToggle }: ToggleButtonProps) => {
  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1">
      <button
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          isFreelancer ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onToggle(true)}
      >
        For Freelancers
      </button>
      <button
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          !isFreelancer ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onToggle(false)}
      >
        For Businesses
      </button>
    </div>
  );
};

export default ToggleButton;