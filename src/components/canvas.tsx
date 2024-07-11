import { useRef, useEffect } from 'react';
import Sidebar from './sidebar';

const OverlayCanvas = () => {
    const outerCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const innerCanvasRef = useRef<HTMLCanvasElement | null>(null);

    const resizeCanvas = () => {
        const outerCanvas = outerCanvasRef.current;
        const innerCanvas = innerCanvasRef.current;

        if (outerCanvas && innerCanvas) {
            outerCanvas.width = 1080;
            outerCanvas.height = 720;

            innerCanvas.width = outerCanvas.width / 2;
            innerCanvas.height = outerCanvas.height / 2;
        }
    };

    const drawImages = () => {
        const outerCanvas = outerCanvasRef.current;
        const innerCanvas = innerCanvasRef.current;

        if (outerCanvas && innerCanvas) {
            const outerContext = outerCanvas.getContext('2d');
            const innerContext = innerCanvas.getContext('2d');

            if (outerContext && innerContext) {
                const outerImage = new Image();
                outerImage.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Replace with the path to your outer image
                outerImage.onload = () => {
                    outerContext.drawImage(outerImage, 0, 0, 1080, 720);

                    const innerImage = new Image();
                    innerImage.src = background; // Replace with the path to your inner image
                    innerImage.onload = () => {
                        innerContext.drawImage(innerImage, 0, 0, innerCanvas.width, innerCanvas.height);
                        innerContext.translate(200, 400);
                        drawInnerCanvasInOuterCanvas();
                    };
                };
            }
        }
    };

    const drawInnerCanvasInOuterCanvas = () => {
        const outerCanvas = outerCanvasRef.current;
        const outerContext = outerCanvas?.getContext('2d');
        const innerCanvas = innerCanvasRef.current;


        if (outerCanvas && outerContext && innerCanvas) {
            outerContext.drawImage(innerCanvas,
                (outerCanvas.width - innerCanvas.width) / 2,
                (outerCanvas.height - innerCanvas.height) / 2);
        }
    };

    useEffect(() => {
        resizeCanvas();
        drawImages();

        window.addEventListener('resize', () => {
            resizeCanvas();
            drawImages();
        });

        return () => {
            window.removeEventListener('resize', () => {
                resizeCanvas();
                drawImages();
            });
        };
    }, []);

    return (
        <>
            <div className='min-w-[77.5%] flex items-center justify-center'>
                <canvas ref={outerCanvasRef} style={{ display: 'block' }} />
                <canvas ref={innerCanvasRef} style={{ display: 'none' }} />
            </div>
            <div className='min-w-[22.5%]'>
                <Sidebar />
            </div>
        </>
    );
};

export default OverlayCanvas;