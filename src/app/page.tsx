'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Title from '@/components/Title';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import FormButton from '@/components/FormButton';

const cuisineOptions = [
    { label: 'Select cuisine', value: '' },
    { label: 'Italian', value: 'Italian' },
    { label: 'Mexican', value: 'Mexican' },
    { label: 'Chinese', value: 'Chinese' },
];

const Home = () => {
    const [query, setQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [time, setTime] = useState('');
    const router = useRouter();

    const isFormFilled = query.trim() || cuisine || time;

    const handleNext = () => {
        const params = new URLSearchParams();
        if (query.trim()) params.append('query', query.trim());
        if (cuisine) params.append('cuisine', cuisine);
        if (time) params.append('time', time);

        router.push(`/recipes?${params.toString()}`);
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <Title text="Find a Recipe" />
            <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md">
                <FormInput
                    placeholder="Enter recipe (e.g. pasta)"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <FormSelect value={cuisine} onChange={e => setCuisine(e.target.value)} options={cuisineOptions} />
                <FormInput
                    type="number"
                    placeholder="Max preparation time (minutes)"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    min={1}
                />
                <FormButton text="Next" onClick={handleNext} disabled={!isFormFilled} />
            </div>
        </div>
    );
};

export default Home;
