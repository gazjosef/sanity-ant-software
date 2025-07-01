interface FeatureBoxProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureBox({
  children,
  title,
  description,
}: FeatureBoxProps) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all">
      {children}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}
