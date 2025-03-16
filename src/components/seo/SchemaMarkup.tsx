import { FC, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSchemaMarkup } from '../../utils/seo';

interface SchemaMarkupProps {
  page: string;
  data?: Record<string, any>;
}

const SchemaMarkup: FC<SchemaMarkupProps> = memo(({ page, data }) => (
  <Helmet>
    <script type="application/ld+json">
      {generateSchemaMarkup(page, data)}
    </script>
  </Helmet>
));

SchemaMarkup.displayName = 'SchemaMarkup';

export default SchemaMarkup; 