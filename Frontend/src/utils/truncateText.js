export function truncateText(text, maxWidth, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    let width = context.measureText(text).width;
  
    if (width <= maxWidth) {
      return text;
    }
  
    let truncatedText = text;
    while (width > maxWidth) {
      truncatedText = truncatedText.slice(0, -1);
      width = context.measureText(truncatedText + '...').width;
    }
    
    return truncatedText + '...';
  }


