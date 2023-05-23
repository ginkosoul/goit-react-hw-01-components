import PropTypes from 'prop-types';
import { Item, Label, Percentage, StatList, StatSection, Title } from 'components/Statistics/Statistics.styled';

export const Statistics = ({data}) => <StatSection>
<Title>Upload stats</Title>
<StatList>
    {data.map(e => <StatisticItems key={e.id} data={e}/>)}
</StatList>
</StatSection>;

const StatisticItems = ({data:{ label, percentage}}) => {
    return (
        <Item p={label}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </Item>)
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }))
}