'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ChangeUrlParams = () => {
const searchParams = useSearchParams();
  const router = useRouter();
  const [paramValue, setParamValue] = useState(searchParams.get('param') || '');

  useEffect(() => {
    setParamValue(searchParams.get('param') || '');
  }, [searchParams  ]);

  const handleChange = (e) => {
    setParamValue(e.target.value);
  };

  const updateUrl = () => {
    const params = new URLSearchParams(searchParams);
    params.set('param', paramValue);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <input
        type="text"
        value={paramValue}
        onChange={handleChange}
        placeholder="Enter parameter value"
      />
      <button onClick={updateUrl}>Update URL</button>
    </div>
  );
};

export default ChangeUrlParams;
