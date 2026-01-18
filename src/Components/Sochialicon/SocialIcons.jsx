import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  const icons = [FaFacebook, FaTwitter, FaLinkedin, FaInstagram];

  return (
    <div className="flex items-center gap-4 mt-6">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-800 hover:bg-green-600 transition cursor-pointer"
        >
          <Icon className="text-white" size={20} />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
