import { forwardRef, useRef, useEffect, useState } from "react";

const Draggable = forwardRef(({ events }, ref) => {
    const faqs = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            author: 'John Doe',
            title: 'CEO'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            author: 'John Doe',
            title: 'CEO'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            author: 'John Doe',
            title: 'CEO'
        }
    ];

    const containerRef = ref;
    const itemRefs = useRef([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const handleMouseDown = () => {
            setIsDragging(true);
            setIsScrolling(false);
        };

        const handleMouseUpOrTouchEnd = () => {
            setIsDragging(false);
            setTimeout(() => {
                const container = containerRef.current;
                if (isScrolling) return; 

                let maxVisible = 0;
                let mostVisibleIndex = 0;

                itemRefs.current.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
                    const totalWidth = rect.width;
                    const visiblePercentage = visibleWidth / totalWidth;

                    if (visiblePercentage > maxVisible) {
                        maxVisible = visiblePercentage;
                        mostVisibleIndex = index;
                    }
                });

                const targetItem = itemRefs.current[mostVisibleIndex];
                container.scrollTo({
                    left: targetItem.offsetLeft - container.offsetLeft,
                    behavior: 'smooth',
                });

                setCurrentIndex(mostVisibleIndex+1);
            }, 100);
        };

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
                handleMouseUpOrTouchEnd();
            }, 150);
        };

        let scrollTimeout;

        const container = containerRef.current;

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseup', handleMouseUpOrTouchEnd);

        container.addEventListener('touchstart', handleMouseDown);
        container.addEventListener('touchend', handleMouseUpOrTouchEnd);

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseup', handleMouseUpOrTouchEnd);
            container.removeEventListener('touchstart', handleMouseDown);
            container.removeEventListener('touchend', handleMouseUpOrTouchEnd);
            container.removeEventListener('scroll', handleScroll);
        };
    }, [isDragging, isScrolling]);

    return (
        <div className='w-full cursor-grab flex px-6 mt-8 flex-col items-center rounded-sm'>
            <div ref={containerRef} {...events} className='w-full h-fit flex overflow-hidden space-x-12'>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        ref={(el) => itemRefs.current[index] = el} 
                        className='min-w-full h-fit items-center flex flex-col overflow-hidden'
                    >
                        <div className='w-full cursor-grab font-cairo text-center text-[19.5px] leading-8 px-7 py-4 items-center justify-center bg-white flex min-h-[104px] h-fit relative triangle-container'>
                            {faq.text}
                        </div>
                        <p className='mt-9 cursor-grab font-cairo text-alpha_gray w-fit font-semibold'>{faq.author}</p>
                        <p className='mt-2 cursor-grab font-cairo text-alpha_gray w-fit font-semibold'>{faq.title}</p>
                    </div>
                ))}
            </div>
            <p className="mt-5 font-cairo">{currentIndex} / {faqs.length}</p>
        </div>
    );
});

export default Draggable;
