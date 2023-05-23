import PropTypes from 'prop-types';
import { Item, Label, Percentage, StatList, StatSection, Title } from 'components/Statistics/Statistics.styled';

export const Statistics = ({stats , title}) => <StatSection>
{title && <Title>{title}</Title>}
<StatList>
    {stats.map(e => <StatisticItems 
        key={e.id} 
        label={e.label} 
        percentage={e.percentage}/>)}
</StatList>
</StatSection>;

const StatisticItems = ({ label, percentage}) => {
    return (
        <Item>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </Item>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }))
}

StatisticItems.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}