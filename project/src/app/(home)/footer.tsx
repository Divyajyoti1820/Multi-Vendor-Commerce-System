export const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t font-medium p-6">
      <p>Divyajyoti</p>
      <p>© {new Date().getFullYear()} Ekādhāra. All rights reserved.</p>
      <p className="text-right">
        Republic of India <strong>🇮🇳</strong>
      </p>
    </footer>
  );
};
