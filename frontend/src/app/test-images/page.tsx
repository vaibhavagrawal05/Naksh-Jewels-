import Image from 'next/image';

export default function TestImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Category Images:</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>Rings:</p>
              <Image
                src="/categories/rings.jpg"
                alt="Rings"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div>
              <p>Necklaces:</p>
              <Image
                src="/categories/necklaces.jpg"
                alt="Necklaces"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div>
              <p>Earrings:</p>
              <Image
                src="/categories/earrings.jpg"
                alt="Earrings"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Product Images:</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Diamond Ring:</p>
              <Image
                src="/products/diamond-ring.jpg"
                alt="Diamond Ring"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div>
              <p>Pearl Necklace:</p>
              <Image
                src="/products/pearl-necklace.jpg"
                alt="Pearl Necklace"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 