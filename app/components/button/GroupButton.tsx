'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '../../../utils/common';
import useTranslation from 'next-translate/useTranslation';
import Button from '../button/Button';

interface ButtonGroupProps {
  title: string;
  options: {
    title: string;
    value: string;
  }[];
  classInfo: {
    commonClass: string; // 공통 css클래스
    selectedClass: string; // 선택 시 적용 css 클래스
    unselectedClass: string; // 미선택 시 적용 css 클래스
  };
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  title,
  options,
  classInfo,
}) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option
  const { t, lang } = useTranslation('main');

  const firstButton = 'rounded-l-lg';
  const middleButton = 'border-t border-b border-r';
  const lastButton = 'rounded-r-lg';

  // Update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (option: any) => {
    const newPathName = updateSearchParams(title, option.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="inline-flex rounded-md m-2 mr-4 " role="group">
      {options.map((option, index) => {
        // Determine the position of the button
        const isFirst = index === 0;
        const isLast = index === options.length - 1;
        const isSelected = selected.title === option.title;

        // Determine the className based on the position
        const positionClass = isFirst
          ? firstButton
          : isLast
          ? lastButton
          : middleButton;

        // Determine the className based on the selected state
        const stateClass = isSelected
          ? classInfo.selectedClass
          : classInfo.unselectedClass;

        const finalClass = `${classInfo.commonClass} ${positionClass} ${stateClass}`;

        return (
          <Button
            key={option.title}
            label={t(option.title)}
            classStyle={finalClass}
            onClick={() => {
              setSelected(option);
              handleUpdateParams(option);
            }}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
