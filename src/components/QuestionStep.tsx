import type { Question, QuestionnaireAnswers } from '../types';
import RadioGroup from './RadioGroup';
import CheckboxGroup from './CheckboxGroup';
import TextInput from './TextInput';

interface QuestionStepProps {
  questions: Question[];
  answers: QuestionnaireAnswers;
  onAnswer: (questionId: string, value: string | string[]) => void;
}

export default function QuestionStep({ questions, answers, onAnswer }: QuestionStepProps) {
  return (
    <div className="space-y-8">
      {questions.map((q) => (
        <div key={q.id} className="animate-fade-in">
          <h3 className="text-lg font-semibold text-[#e5e5e5] mb-4">{q.question}</h3>

          {q.type === 'radio' && q.options && (
            <RadioGroup
              name={q.id}
              options={q.options}
              value={(answers[q.id] as string) || ''}
              onChange={(value) => onAnswer(q.id, value)}
            />
          )}

          {q.type === 'checkbox' && q.options && (
            <CheckboxGroup
              options={q.options}
              values={(answers[q.id] as string[]) || []}
              onChange={(values) => onAnswer(q.id, values)}
            />
          )}

          {q.type === 'text' && (
            <TextInput
              value={(answers[q.id] as string) || ''}
              onChange={(value) => onAnswer(q.id, value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
